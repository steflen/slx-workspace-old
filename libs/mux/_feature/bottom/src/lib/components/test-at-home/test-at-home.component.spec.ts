import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAtHomeComponent } from './test-at-home.component';

describe('TestAtHomeComponent', () => {
  let component: TestAtHomeComponent;
  let fixture: ComponentFixture<TestAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
