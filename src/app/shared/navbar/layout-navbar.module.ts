import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { RouterModule } from '@angular/router';

/* -------------------------------------------------------------------------- */
/*                                 Route List                                 */
/* -------------------------------------------------------------------------- */

@NgModule({
  declarations: [LayoutNavbarComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LayoutNavbarComponent]
})
export class LayoutNavbarModule { }
