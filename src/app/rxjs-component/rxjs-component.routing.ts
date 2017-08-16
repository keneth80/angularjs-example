import { RouterModule, Routes } from '@angular/router';
import { RxjsLoginComponent } from './rxjs-form-login.component';
import { RxjsComponent } from './rxjs.component';

const ROUTER_DATA: Routes = [
  { path: 'RxjsComponent', component: RxjsComponent },
  { path: 'RxjsLoginComponent', component: RxjsLoginComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
