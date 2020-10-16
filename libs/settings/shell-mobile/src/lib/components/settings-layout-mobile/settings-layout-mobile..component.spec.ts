import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsLayoutMobileComponent } from './settings-layout-mobile.component';

describe('SettingsLayoutMobileComponent', () => {
  let component: SettingsLayoutMobileComponent;
  let fixture: ComponentFixture<SettingsLayoutMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsLayoutWebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLayoutMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
