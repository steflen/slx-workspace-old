import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardWebLayoutComponent } from './board-web-layout.component';

describe('BoardWebLayoutComponent', () => {
  let component: BoardWebLayoutComponent;
  let fixture: ComponentFixture<BoardWebLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardWebLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardWebLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
