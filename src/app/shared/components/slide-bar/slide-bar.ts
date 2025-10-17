import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [NzMenuModule, NzIconModule, RouterModule],
  templateUrl: './slide-bar.html',
  styleUrls: ['./slide-bar.scss'],
})
export class SlideBarComponent {}
