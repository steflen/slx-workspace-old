import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOverviewComponent } from './error-overview.component';

describe('ErrorOverviewComponent', () => {
  let component: ErrorOverviewComponent;
  let fixture: ComponentFixture<ErrorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
