import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../shared/layout/layout.module';
import { LayoutUserComponent } from '../../shared/layout/layout-user/layout-user.component';
import { HomeIndexComponent } from './pages/home-index/home-index.component';

/* -------------------------------------------------------------------------- */
/*                                 Route List                                 */
/* -------------------------------------------------------------------------- */
const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
    children: [{ path: '', component: HomeIndexComponent }],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Module list                                */
/* -------------------------------------------------------------------------- */
@NgModule({
  declarations: [HomeIndexComponent],
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
