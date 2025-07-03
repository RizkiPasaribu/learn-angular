import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutUserComponent } from './layout-user/layout-user.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

/* -------------------------------------------------------------------------- */
/*                                 Module List                                */
/* -------------------------------------------------------------------------- */
@NgModule({
  declarations: [LayoutUserComponent, LayoutAdminComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutUserComponent, LayoutAdminComponent],
})
export class LayoutModule {}
