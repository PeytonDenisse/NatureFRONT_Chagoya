export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  {
    path: '',
    loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule)
  },
  { path: '**', redirectTo: 'admin' }
];
import { Routes } from '@angular/router';