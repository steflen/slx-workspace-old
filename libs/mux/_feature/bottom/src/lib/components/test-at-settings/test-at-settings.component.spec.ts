import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAtSettingsComponent } from './test-at-settings.component';

describe('TestAtSettingsComponent', () => {
  let component: TestAtSettingsComponent;
  let fixture: ComponentFixture<TestAtSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAtSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAtSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
