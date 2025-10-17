import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout';
import { HomeComponent } from './home/home';
import { Place } from './places/places';
import { PlaceDetail } from './place-detail/place-detail';
import { Trails } from './trails/trails';
import { TrailService } from '../core/services/trail.service';
import { PlaceService } from '../core/services/place.service';
import { ADMIN_ROUTES } from './pages.routes';
import { SlideBarComponent } from "../shared/components/slide-bar/slide-bar";


@NgModule({
  declarations: [
    
    AdminLayoutComponent,
    HomeComponent,
    Place,
    PlaceDetail,
    Trails
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    SlideBarComponent
],
  providers: [
    PlaceService,
    TrailService
  ],
  exports:[
    AdminLayoutComponent,
    HomeComponent,
    Place,
    PlaceDetail,
    Trails,
    RouterModule
  ]
})

export class PagesModule { }