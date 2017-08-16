import { RouterModule, Routes } from '@angular/router';
import { FileReadComponent } from './file-read.component';

const ROUTER_DATA: Routes = [
  { path: 'FileReadComponent', component: FileReadComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
