import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxjsComponent } from '../rxjs-component/rxjs.component';
import { ScoreComponent } from '../rxjs-component/rxjs-communication.component';
import { RxjsLoginComponent } from '../rxjs-component/rxjs-form-login.component';
import { ROUTER_CONFIG } from './../rxjs-component/rxjs-component.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTER_CONFIG 
  ],
  declarations: [
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent
  ],
  providers: [ ],
  exports:[
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent
  ]
})
export class RxjsModule { }
