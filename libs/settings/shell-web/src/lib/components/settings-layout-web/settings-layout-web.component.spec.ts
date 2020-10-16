import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLayoutWebComponent } from './settings-layout-web.component';

describe('SettingsLayoutWebComponent', () => {
  let component: SettingsLayoutWebComponent;
  let fixture: ComponentFixture<SettingsLayoutWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLayoutWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLayoutWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
