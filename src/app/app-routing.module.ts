import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { RoutingExComponent } from './routing-example/routing-ex.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-child/view-children.component';
import { FriendListComponent } from './component-example/parent-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';
import { RxjsComponent } from './rxjs-component/rxjs.component';
import { RxjsLoginComponent } from './rxjs-component/rxjs-form-login.component';
import { ContentChildComponent } from './content-child-example/content-child.component';
import { FileReadComponent } from './file-read-example/file-read.component';
import { DynamicComponent } from './dynamic-component-example/dynamic-component.component';
import { PipeComponent } from './pipe-example/pipe.component';
import { BookListComponent } from './mongodb-example/book/book-list.component';
import { TypescriptComponent } from './typescript-example/typescript-example.component';
import { CdDemosAppComponent } from './change-detection-example/cd-demos.component';

import { DefaultChangeDetectionComponent } from './change-detection-example/default-change-detection';
import { ManualChangeDetectionComponent } from './change-detection-example/manual-change-detection';
import { OnPushChangeDetectionComponent } from './change-detection-example/on-push-change-detection';
import { OnPushChangeDetectionObservablesComponent } from './change-detection-example/on-push-change-detection-observables';

import { ConfigurationService } from './file-read-example/file-read.service';

import { TextAreaHtmlStringExampleComponent } from './text-area-html-string-example/text-area-html-string-example.component';


const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' }
    , { path: 'main', component: RoutingExComponent }
    , { path: '', loadChildren: 'app/routing-example/routing-ex.module#RoutingExModule' }
    , { path: '', loadChildren: 'app/view-child/view-child.module#ViewChildModule' }
    , { path: '', loadChildren: 'app/component-example/friend.module#FriendModule' }
    , { path: '', loadChildren: 'app/component-example-tony/child-friend.module#ChildFriendModule' }
    , { path: '', loadChildren: 'app/rxjs-component/rxjs.module#RxjsModule' }
    , { path: '', loadChildren: 'app/content-child-example/content-child.module#ContentChildModule' }
    , { path: '', loadChildren: 'app/file-read-example/file-read.module#FileReadModule', canActivate: [ConfigurationService] }
    , { path: '', loadChildren: 'app/dynamic-component-example/dynamic-component.module#DynamicComponentModule' }
    , { path: '', loadChildren: 'app/pipe-example/pipe.module#PipeModule' }
    , { path: '', loadChildren: 'app/typescript-example/typescript.module#TypescriptModule' }
    , { path: 'BookListComponent', component: BookListComponent }
    , { path: 'ChangeDetection', component: CdDemosAppComponent }
    , { path: 'TypescriptComponent', component: TypescriptComponent }
    , { path: 'TextAreaComponent' , component: TextAreaHtmlStringExampleComponent }
    , { path: 'ChangeDetection', component: CdDemosAppComponent,
        children: [
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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ConfigurationService, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

