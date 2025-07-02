import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordIndexComponent } from './pages/dashbord-index/dashbord-index.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutSidebarComponent } from '../shared/layout/layout-sidebar/layout-sidebar.component';
import { LayoutModule } from '../shared/layout/layout.module';

/* -------------------------------------------------------------------------- */
/*                                 Route List                                 */
/* -------------------------------------------------------------------------- */
const routes: Routes = [
  {
    path: '',
    component: LayoutSidebarComponent,
    children: [{ path: '', component: DashbordIndexComponent }],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Module List                                */
/* -------------------------------------------------------------------------- */

@NgModule({
  declarations: [DashbordIndexComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
