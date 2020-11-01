import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreDashboardComponent } from '../explore-dashboard/explore-dashboard.component';
import { ExploreComponent } from '../explore.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [{ path: '', component: ExploreDashboardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
