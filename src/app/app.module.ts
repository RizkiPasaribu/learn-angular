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
    redirectTo: '/user',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/home/home.module').then((m) => m.HomeModule),
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
