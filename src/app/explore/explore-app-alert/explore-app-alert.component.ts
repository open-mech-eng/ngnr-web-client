import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AlertMessage {
  message: string;
  importance: 'info' | 'warning' | 'danger';
}
@Component({
  selector: 'app-explore-app-alert',
  templateUrl: './explore-app-alert.component.html',
  styleUrls: ['./explore-app-alert.component.scss'],
})
export class ExploreAppAlertComponent implements OnInit {
  private privateAlertMessages$ = new BehaviorSubject<AlertMessage[]>([]);

  constructor() {}

  ngOnInit(): void {}

  get alertMessages$(): BehaviorSubject<AlertMessage[]> {
    return this.privateAlertMessages$;
  }
}
