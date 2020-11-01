import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerShellComponent } from './explorer-shell.component';

describe('ExplorerShellComponent', () => {
  let component: ExplorerShellComponent;
  let fixture: ComponentFixture<ExplorerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
