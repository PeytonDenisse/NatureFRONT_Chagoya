import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  HomeOutline, EnvironmentOutline, DeploymentUnitOutline, MenuFoldOutline, MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NzMenuModule, NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: [HomeOutline, EnvironmentOutline, DeploymentUnitOutline, MenuFoldOutline, MenuUnfoldOutline] }],
  templateUrl: './slide-bar.html',
  styleUrls: ['./slide-bar.scss']
})
export class SlideBarComponent {
  collapsed = signal(false);
  toggle() { this.collapsed.update(v => !v); }
}
