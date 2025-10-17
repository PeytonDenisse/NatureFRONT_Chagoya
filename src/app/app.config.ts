import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideAnimations } from '@angular/platform-browser/animations';

// 👇 estos son los íconos que estás usando en la sidebar
import { EnvironmentOutline, TagOutline, FileTextOutline, ArrowUpOutline,
  CheckCircleOutline, DollarOutline, ClockCircleOutline, AppstoreOutline } from '@ant-design/icons-angular/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideNzIcons([
    EnvironmentOutline, TagOutline, FileTextOutline, ArrowUpOutline,
    CheckCircleOutline, DollarOutline, ClockCircleOutline, AppstoreOutline
  ])
  ]
};
