import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewChildComponent, Good, Item, Items, ItemComponent } from '../view-child/view-child.component';
import { ViewChildrenComponent, ChildComponent, ChildNameComponent } from '../view-child/view-children.component';
import { ROUTER_CONFIG } from './view-child.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ROUTER_CONFIG
  ],
  declarations: [
    ViewChildComponent,
    Good,
    Item,
    Items,
    ItemComponent,
    ViewChildrenComponent,
    ChildComponent,
    ChildNameComponent
  ],
  providers: [],
  exports: [
    ViewChildComponent,
    ViewChildrenComponent,
    Good,
    Item,
    Items,
    ItemComponent,
    ChildComponent,
    ChildNameComponent
  ]
})
export class ViewChildModule { 

  
}
