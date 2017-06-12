import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/viewchild.component';
import { Item } from './view-child/viewchild.component';
import { ItemComponent } from './view-child/viewchild.component';
import { Good } from './view-child/viewchild.component';
import { Items } from './view-child/viewchild.component';

import { FriendComponent } from './component-example/child-friend.component';
import { FriendListComponent } from './component-example/parent-friend.component';

import { RxjsComponent } from './rxjs-component/rxjs-example-component';
import { ScoreComponent } from './rxjs-component/rxjs-example-communication';
import { RxjsLoginComponent } from './rxjs-component/rxjs-example-form-login';

import { ContentChildComponent } from './content-child-example/content-child.component';

import { ChildFriendListComponent } from './component-example-tony/child-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    Item,
    ItemComponent,
    Good,
    Items,
    FriendComponent,
    FriendListComponent,
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent,
    ChildFriendListComponent,
    ParentFriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
