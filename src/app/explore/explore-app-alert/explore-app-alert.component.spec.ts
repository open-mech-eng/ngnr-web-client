import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAppAlertComponent } from './explore-app-alert.component';

describe('ExploreAppAlertComponent', () => {
  let component: ExploreAppAlertComponent;
  let fixture: ComponentFixture<ExploreAppAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAppAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreAppAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
