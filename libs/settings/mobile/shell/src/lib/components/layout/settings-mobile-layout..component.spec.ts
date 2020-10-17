import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsMobileLayoutComponent } from './settings-mobile-layout.component';

describe('SettingsMobileLayoutComponent', () => {
  let component: SettingsMobileLayoutComponent;
  let fixture: ComponentFixture<SettingsMobileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsMobileLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMobileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
