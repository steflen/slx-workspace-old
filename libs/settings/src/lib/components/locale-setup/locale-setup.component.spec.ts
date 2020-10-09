import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSetupComponent } from './locale-setup.component';

describe('LocaleSetupComponent', () => {
  let component: LocaleSetupComponent;
  let fixture: ComponentFixture<LocaleSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
