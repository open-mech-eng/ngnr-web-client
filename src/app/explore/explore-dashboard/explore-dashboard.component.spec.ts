import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDashboardComponent } from './explore-dashboard.component';

describe('ExploreDashboardComponent', () => {
  let component: ExploreDashboardComponent;
  let fixture: ComponentFixture<ExploreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
