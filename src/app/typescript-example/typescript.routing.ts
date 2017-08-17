import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript-example.component';

const ROUTER_DATA: Routes = [
  { path: 'TypescriptComponent', component: TypescriptComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
