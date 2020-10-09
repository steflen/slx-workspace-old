import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeSetupComponent } from './night-mode-setup.component';

describe('NightModeSetupComponent', () => {
  let component: NightModeSetupComponent;
  let fixture: ComponentFixture<NightModeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightModeSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightModeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
