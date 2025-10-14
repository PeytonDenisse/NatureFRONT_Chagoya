import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NATURE_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(NATURE_ROUTES), provideHttpClient()]
};
