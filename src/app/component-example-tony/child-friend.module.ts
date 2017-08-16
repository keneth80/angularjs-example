import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChildFriendListComponent } from '../component-example-tony/child-friend.component';
import { ParentFriendComponent } from '../component-example-tony/parent-friend.component';
import { ROUTER_CONFIG } from './component-ex-tony.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTER_CONFIG
  ],
  declarations: [
    ChildFriendListComponent,
    ParentFriendComponent
  ],
  providers: [ ],
  exports:[
    ChildFriendListComponent,
    ParentFriendComponent
  ]
})
export class ChildFriendModule { }
