import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component.component';


const ROUTER_DATA: Routes = [
  { path: 'DynamicComponent', component: DynamicComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
