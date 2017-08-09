import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { RoutingEx } from './routing-example/routing-ex';
import { ViewChildComponent } from './view-child/viewchild.component';
import { ViewChildrenComponent } from './view-child/viewchildren.component';
import { FriendListComponent } from './component-example/parent-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';
import { RxjsComponent } from './rxjs-component/rxjs-example-component';
import { RxjsLoginComponent } from './rxjs-component/rxjs-example-form-login';
import { ContentChildComponent } from './content-child-example/content-child.component';
import { FileReadComponent } from './file-read-example/file-read.component';
import { DynamicComponent } from './dynamic-component-example/dynamic-component.component';
// import { HeroDetailComponent }  from './hero-detail.component';

import { ConfigurationService } from './file-read-example/file-read.service';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' }
    , { path: 'main',  component: FileReadComponent }
    , { path: 'routingEx', component: RoutingEx }
    , { path: 'ViewChild', component: ViewChildComponent }
    , { path: 'viewchildren', component: ViewChildrenComponent }
    , { path: 'FriendList', component: FriendListComponent }
    , { path: 'ParentFriend', component: ParentFriendComponent }
    , { path: 'RxjsComponent', component: RxjsComponent }
    , { path: 'RxjsLoginComponent', component: RxjsLoginComponent }
    , { path: 'ContentChildComponent', component: ContentChildComponent }
    , { path: 'FileRead', component: FileReadComponent, canActivate: [ConfigurationService] }
    , { path: 'DynamicComponent', component: DynamicComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ ConfigurationService, {provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppRoutingModule {}
