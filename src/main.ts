import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AdminLayoutComponent  } from './app/pages/admin-layout/admin-layout';




import { provideNzIcons } from 'ng-zorro-antd/icon';
import {
  HomeOutline,
  EnvironmentOutline,
  BranchesOutline,
  QuestionCircleOutline
} from '@ant-design/icons-angular/icons';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideNzIcons([
      HomeOutline,
      EnvironmentOutline,
      BranchesOutline,
      QuestionCircleOutline
    ])
  ]
});


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
