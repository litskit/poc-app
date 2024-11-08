import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizValueComponent } from './biz-value.component';

describe('BizValueComponent', () => {
  let component: BizValueComponent;
  let fixture: ComponentFixture<BizValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BizValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BizValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
