import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardLandingWebComponent } from './board-landing-web.component';

describe('SettingsLandingWebComponent', () => {
  let component: BoardLandingWebComponent;
  let fixture: ComponentFixture<BoardLandingWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardLandingWebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLandingWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
