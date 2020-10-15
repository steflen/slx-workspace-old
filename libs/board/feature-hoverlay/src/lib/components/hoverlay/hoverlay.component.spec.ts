import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverlayComponent } from './hoverlay.component';

describe('HoverlayComponent', () => {
  let component: HoverlayComponent;
  let fixture: ComponentFixture<HoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
