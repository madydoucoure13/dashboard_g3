import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChartComponent } from './section-chart.component';

describe('SectionChartComponent', () => {
  let component: SectionChartComponent;
  let fixture: ComponentFixture<SectionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
