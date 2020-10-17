import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateForwardComponent } from './navigate-forward.component';

describe('NavigateForwardComponent', () => {
  let component: NavigateForwardComponent;
  let fixture: ComponentFixture<NavigateForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateForwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
