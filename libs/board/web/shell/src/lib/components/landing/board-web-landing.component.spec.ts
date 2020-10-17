import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardWebLandingComponent } from './board-web-landing.component';

describe('BoardWebLandingComponent', () => {
  let component: BoardWebLandingComponent;
  let fixture: ComponentFixture<BoardWebLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardWebLandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardWebLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
