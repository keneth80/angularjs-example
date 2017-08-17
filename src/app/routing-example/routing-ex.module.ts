import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutingExComponent } from './routing-ex.component';
import { ROUTER_CONFIG } from './routing-ex.routing';

@NgModule({
  imports: [
    FormsModule,
    ROUTER_CONFIG
  ],
  declarations: [
    RoutingExComponent
  ],
  providers: []
})
export class RoutingExModule { }
