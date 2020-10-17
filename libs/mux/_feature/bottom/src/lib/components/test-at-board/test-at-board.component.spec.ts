import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAtBoardComponent } from './test-at-board.component';

describe('TestAtBoardComponent', () => {
  let component: TestAtBoardComponent;
  let fixture: ComponentFixture<TestAtBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAtBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAtBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
