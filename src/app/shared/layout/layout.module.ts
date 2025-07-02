import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { RouterModule } from '@angular/router';

/* -------------------------------------------------------------------------- */
/*                                 Module List                                */
/* -------------------------------------------------------------------------- */
@NgModule({
  declarations: [LayoutSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutSidebarComponent],
})
export class LayoutModule {}
