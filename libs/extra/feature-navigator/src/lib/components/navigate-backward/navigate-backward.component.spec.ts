import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigateBackwardComponent } from './navigate-backward.component';

describe('NavigateBackwardsComponent', () => {
  let component: NavigateBackwardComponent;
  let fixture: ComponentFixture<NavigateBackwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateBackwardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateBackwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
