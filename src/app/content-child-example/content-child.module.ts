import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GroupTitle,ChildButtonCompnent,ButtonGroup,ContentChildComponent } from '../content-child-example/content-child.component';
import { ROUTER_CONFIG } from './content-child.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTER_CONFIG
  ],
  declarations: [
    GroupTitle,
    ChildButtonCompnent,
    ButtonGroup,
    ContentChildComponent
  ],
  providers: [ ],
  exports:[
    GroupTitle,
    ChildButtonCompnent,
    ButtonGroup,
    ContentChildComponent
  ]
})
export class ContentChildModule { }
