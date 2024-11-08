import { Component, OnInit } from '@angular/core';
import { BusinessValue } from '../models/business-value.interface';
import { BusinessValueService } from '../services/business-value.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type TagSeverity = 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast';

@Component({
  selector: 'app-biz-value',
  templateUrl: './biz-value.component.html',
  styleUrl: './biz-value.component.scss'
})
export class BizValueComponent implements OnInit {

  businessValues: BusinessValue[] = [];
  showAddDialog = false;
  businessValueForm: FormGroup;
  viewMode: 'table' | 'yearly' = 'table';
  statusSeverityMap: Record<string, TagSeverity> = {
    'Planned': 'info',
    'In Progress': 'warning',
    'Completed': 'success',
    'On Hold': 'danger'
  } as const;

  constructor(
    private businessValueService: BusinessValueService,
    private fb: FormBuilder
  ) {
    this.businessValueForm = this.fb.group({
      initiativeName: ['', Validators.required],
      description: ['', Validators.required],
      applicationName: ['', Validators.required],
      expectedValue: ['', [Validators.required, Validators.min(0)]],
      valueType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      ownerTeam: ['', Validators.required],
      quarterPlanned: ['', Validators.required],
      risks: ['']
    });
  }

  ngOnInit(): void {
    this.loadBusinessValues();
  }

  loadBusinessValues(): void {
    this.businessValueService.getBusinessValues()
      .subscribe(values => {
        this.businessValues = values;
      });
  }

  getStatusSeverity(status: string): TagSeverity {
    return this.statusSeverityMap[status] || 'info';
  }

  getInitiativesByQuarter(quarter: string): BusinessValue[] {
    return this.businessValues.filter(value => {
      const startDate = new Date(value.startDate);
      const quarterMonth = {
        'Q1': [0, 1, 2],
        'Q2': [3, 4, 5],
        'Q3': [6, 7, 8],
        'Q4': [9, 10, 11]
      };
      return quarterMonth[quarter as keyof typeof quarterMonth].includes(startDate.getMonth());
    });
  }

  toggleView(): void {
    this.viewMode = this.viewMode === 'table' ? 'yearly' : 'table';
  }

  openAddDialog(): void {
    this.showAddDialog = true;
  }

  submitBusinessValue(): void {
    if (this.businessValueForm.valid) {
      const newValue = {
        id: Date.now().toString(), // Generate a temporary ID
        ...this.businessValueForm.value,
        status: 'Planned',
        risks: this.businessValueForm.value.risks.split(',').map((risk: string) => risk.trim())
      };

      this.businessValueService.addBusinessValue(newValue)
        .subscribe(() => {
          this.loadBusinessValues();
          this.showAddDialog = false;
          this.businessValueForm.reset();
        });
    }
  }
}
