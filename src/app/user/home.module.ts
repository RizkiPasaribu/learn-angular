import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutNavbarComponent } from '../shared/navbar/layout-navbar/layout-navbar.component';
import { LayoutNavbarModule } from '../shared/navbar/layout-navbar.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutNavbarComponent,
    children: [{ path:'', component: HomeComponent}],
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, LayoutNavbarModule, RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
