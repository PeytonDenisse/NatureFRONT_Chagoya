import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './pages/admin-layout/admin-layout';
import { HomeComponent } from './pages/home/home';
import { PlacesListComponent } from './pages/places/places-list/places-list';
import { PlaceDetailComponent } from './pages/places/place-detail/place-detail';
import { TrailsListComponent } from './pages/trails/trails-list/trails-list';

export const NATURE_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },                 
      { path: 'places', component: PlacesListComponent },        
      { path: 'places/:id', component: PlaceDetailComponent },
      { path: 'trails', component: TrailsListComponent },         
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'admin/home' },
  { path: '**', redirectTo: 'admin/home' }
];
