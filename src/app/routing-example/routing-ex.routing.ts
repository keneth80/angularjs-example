import { RouterModule, Routes } from '@angular/router';

import { RoutingExComponent } from './routing-ex.component';

const ROUTER_DATA: Routes = [
  { path: 'RoutingExComponent', component: RoutingExComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
