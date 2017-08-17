import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

/* 특징 모듈 */
import { ViewChildModule } from './view-child/view-child.module';
import { FriendModule } from './component-example/friend.module';
import { RxjsModule } from './rxjs-component/rxjs.module';
import { ContentChildModule } from './content-child-example/content-child.module';
import { ChildFriendModule } from './component-example-tony/child-friend.module';
import { RoutingExModule } from './routing-example/routing-ex.module';
import { FileReadModule } from './file-read-example/file-read.module';
import { DynamicComponentModule } from './dynamic-component-example/dynamic-component.module';
import { PipeModule } from './pipe-example/pipe.module';
import { BookListModule } from './mongodb-example/book.module';
import { TypescriptModule } from './typescript-example/typescript.module';
import { CdDemosAppModule } from './change-detection-example/index';
import { TextAreaHtmlStringModule } from './text-area-html-string-example/text-area-html-string-example.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpModule,
        L_SEMANTIC_UI_MODULE,
        ReactiveFormsModule,
        AppRoutingModule,
        ViewChildModule,
        FriendModule,
        RxjsModule,
        ContentChildModule,
        ChildFriendModule,
        RoutingExModule,
        FileReadModule,
        DynamicComponentModule,
        CdDemosAppModule,
        TextAreaHtmlStringModule
    ],
    exports: [
        AppComponent,
        PipeModule,
        BookListModule,
        TypescriptModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
