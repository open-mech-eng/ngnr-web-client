import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreDashboardComponent } from './explore-dashboard/explore-dashboard.component';
import { ClarityModule } from '@clr/angular';
import { ExploreFooterComponent } from './explore-footer/explore-footer.component';



@NgModule({
  declarations: [ ExploreComponent, ExploreDashboardComponent, ExploreFooterComponent],
  imports: [
    CommonModule,
    ClarityModule
  ]
})
export class ExploreModule { }
