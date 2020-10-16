import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsLandingMobileComponent } from './settings-landing-mobile.component';

describe('SettingsLandingMobileComponent', () => {
  let component: SettingsLandingMobileComponent;
  let fixture: ComponentFixture<SettingsLandingMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsLandingWebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLandingMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
