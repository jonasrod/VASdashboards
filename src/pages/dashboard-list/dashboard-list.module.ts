import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardListPage } from './dashboard-list';

@NgModule({
  declarations: [
    DashboardListPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardListPage),
  ],
})
export class DashboardListPageModule {}
