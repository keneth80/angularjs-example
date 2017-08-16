import { RouterModule, Routes } from '@angular/router';

import { ViewChildComponent } from './view-child.component';
import { ViewChildrenComponent } from './view-children.component';

const ROUTER_DATA: Routes = [
  { path: 'ViewChild', component: ViewChildComponent },
  { path: 'ViewChildren', component: ViewChildrenComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
