import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndDateComponent } from './time-and-date.component';

describe('TimeAndDateComponent', () => {
  let component: TimeAndDateComponent;
  let fixture: ComponentFixture<TimeAndDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAndDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
