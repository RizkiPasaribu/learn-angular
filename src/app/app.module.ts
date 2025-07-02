import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

/* -------------------------------------------------------------------------- */
/*                                 Route List                                 */
/* -------------------------------------------------------------------------- */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Module List                                */
/* -------------------------------------------------------------------------- */
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
