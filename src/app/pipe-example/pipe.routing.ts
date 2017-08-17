import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe.component';


const ROUTER_DATA: Routes = [
  { path: 'PipeComponent', component: PipeComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
