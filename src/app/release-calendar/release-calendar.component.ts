import { Component, OnInit } from '@angular/core';
import { CsvDataService } from '../release-calendar-service/release-calendar-service.component';
import { ReleaseCalendarEntry } from '../models/release-calendar-entry.model';

@Component({
  selector: 'app-release-calendar',
  templateUrl: './release-calendar.component.html',
  styleUrls: ['./release-calendar.component.scss']
})
export class ReleaseCalendarComponent implements OnInit {
  sidebarOptions = [
    { label: 'Add Release', route: '/add-release' },
    { label: 'View Releases', route: '/view-releases' }
  ];
  releaseData: ReleaseCalendarEntry[] = [];


  constructor(private releaseService: CsvDataService) { }

  ngOnInit(): void {
    this.releaseService.getReleaseData().subscribe(data => {
      this.releaseData = data;
      console.log(this.releaseData)
    });
  }
}
