import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreDashboardComponent } from './explore-dashboard/explore-dashboard.component';



@NgModule({
  declarations: [ ExploreComponent, ExploreDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class ExploreModule { }
