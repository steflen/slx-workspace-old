import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsMobileLandingComponent } from './settings-mobile-landing.component';

describe('SettingsMobileLandingComponent', () => {
  let component: SettingsMobileLandingComponent;
  let fixture: ComponentFixture<SettingsMobileLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsMobileLandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMobileLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
