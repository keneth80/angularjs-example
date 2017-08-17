import { RouterModule, Routes } from '@angular/router';
import { ContentChildComponent } from './content-child.component';

const ROUTER_DATA: Routes = [
  { path: 'ContentChildComponent', component: ContentChildComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
