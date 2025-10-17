import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SlideBarComponent } from "./shared/components/slide-bar/slide-bar";
import { PagesModule } from './pages/pages-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagesModule, SlideBarComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nature-app');
}