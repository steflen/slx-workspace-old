import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLandingWebComponent } from './settings-landing-web.component';

describe('SettingsLandingWebComponent', () => {
  let component: SettingsLandingWebComponent;
  let fixture: ComponentFixture<SettingsLandingWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLandingWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLandingWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
