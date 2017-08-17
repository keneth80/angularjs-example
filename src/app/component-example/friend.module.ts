import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FriendComponent } from '../component-example/child-friend.component';
import { FriendListComponent } from '../component-example/parent-friend.component';
import { ROUTER_CONFIG } from './component-ex.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTER_CONFIG 
  ],
  declarations: [
    FriendComponent,
    FriendListComponent
  ],
  providers: [],
  exports:[
    FriendComponent,
    FriendListComponent
  ]
})
export class FriendModule { }
