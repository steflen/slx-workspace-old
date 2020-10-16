import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardLayoutWebComponent } from './board-layout-web.component';

describe('SettingsLayoutWebComponent', () => {
  let component: BoardLayoutWebComponent;
  let fixture: ComponentFixture<BoardLayoutWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardLayoutWebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLayoutWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
