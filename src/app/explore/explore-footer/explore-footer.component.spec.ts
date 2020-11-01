import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFooterComponent } from './explore-footer.component';

describe('ExploreFooterComponent', () => {
  let component: ExploreFooterComponent;
  let fixture: ComponentFixture<ExploreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
