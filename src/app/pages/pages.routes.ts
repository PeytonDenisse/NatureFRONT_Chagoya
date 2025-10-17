import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout';
import { HomeComponent } from './home/home';
import { Place } from './places/places';
import { PlaceDetail } from './place-detail/place-detail';
import { Trails } from './trails/trails';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },     
      { path: 'places', component: Place },
      { path: 'places/:id', component: PlaceDetail },
      { path: 'trails', component: Trails },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
  {
    path: '**', redirectTo: ''
  }
];



