import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDataComponent } from './release-calendar-service.component';

describe('CsvDataComponent', () => {
  let component: CsvDataComponent;
  let fixture: ComponentFixture<CsvDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
