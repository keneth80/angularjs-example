import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* 특징 모듈 */
import { ViewChildModule } from './view-child/viewChaild.module';
import { FriendModule } from './component-example/friend.module';
import { RxjsModule } from './rxjs-component/rxjs.module';
import { ContentChildModule } from './content-child-example/contentChild.module';
import { ChildFriendModule } from './component-example-tony/childFriend.module';
import { RoutingExModule } from './routing-example/routing-ex-module';
import { PipeModule } from './pipe-example/pipe.module';
import { BookListModule } from './mongodb-example/book.module';
import { TypescriptComponent } from './typescript-example/typescript-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent
  ],
  imports: [
    L_SEMANTIC_UI_MODULE,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ViewChildModule,
    FriendModule,
    RxjsModule,
    ContentChildModule,
    ChildFriendModule,
    RoutingExModule,
    PipeModule,
    BookListModule
  ],
  exports: [
    AppComponent,
    TypescriptComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
