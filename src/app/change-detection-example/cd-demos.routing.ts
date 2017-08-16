import { RouterModule, Routes } from '@angular/router';
import { CdDemosAppComponent } from './cd-demos.component';
import { OnPushChangeDetectionObservablesComponent } from "app/change-detection-example/on-push-change-detection-observables";
import { ManualChangeDetectionComponent } from './manual-change-detection/manual-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { DefaultChangeDetectionComponent } from './default-change-detection/default-change-detection.component';

const ROUTER_DATA: Routes = [
  {
    path: 'default-change-detection',
    component: DefaultChangeDetectionComponent,
    outlet: 'cd-routes'
  },
  {
    path: 'on-push-change-detection',
    component: OnPushChangeDetectionComponent,
    outlet: 'cd-routes'
  },
  {
    path: 'on-push-change-detection-observables',
    component: OnPushChangeDetectionObservablesComponent,
    outlet: 'cd-routes'
  },
  {
    path: 'manual-change-detection',
    component: ManualChangeDetectionComponent,
    outlet: 'cd-routes'
  }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);