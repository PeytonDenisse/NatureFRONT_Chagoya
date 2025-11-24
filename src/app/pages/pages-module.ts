import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
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

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';

// 🔹 Íconos
import {
  HomeOutline,
  EnvironmentOutline,
  BranchesOutline,
  QuestionCircleOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  HomeOutline,
  EnvironmentOutline,
  BranchesOutline,
  QuestionCircleOutline
];

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
    SlideBarComponent,
    NzModalModule,
    NzSpinModule,
    NzTabsModule,
    NzCardModule,
    NzGridModule,
    NzProgressModule
  ],
  providers: [
    PlaceService,
    TrailService,
    { provide: NZ_ICONS, useValue: icons }   // ← REGISTRO DE ÍCONOS
  ],
  exports: [
    AdminLayoutComponent,
    HomeComponent,
    Place,
    PlaceDetail,
    Trails,
    RouterModule
  ]
})
export class PagesModule {}
