import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlueFeatureBottomComponent } from './bottom.component';

describe('GlueFeatureBottomComponent', () => {
  let component: GlueFeatureBottomComponent;
  let fixture: ComponentFixture<GlueFeatureBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlueFeatureBottomComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlueFeatureBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
