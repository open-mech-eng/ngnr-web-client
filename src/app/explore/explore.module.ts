import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreDashboardComponent } from './explore-dashboard/explore-dashboard.component';
import { ClarityModule } from '@clr/angular';
import { ExploreFooterComponent } from './explore-footer/explore-footer.component';
import { ExploreHeaderComponent } from './explore-header/explore-header.component';
import { ExploreAppAlertComponent } from './explore-app-alert/explore-app-alert.component';
import { ExploreRoutingModule } from './explore-routing/explore-routing.module';

@NgModule({
  declarations: [
    ExploreComponent,
    ExploreDashboardComponent,
    ExploreFooterComponent,
    ExploreHeaderComponent,
    ExploreAppAlertComponent,
  ],
  imports: [ExploreRoutingModule, CommonModule, ClarityModule],
})
export class ExploreModule {}
