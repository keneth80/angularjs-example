import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HelloWorldComponent from './hello-world.component';
import WorldHelloComponent from './world-hello.component';
import DynamicComponentContainer from './dynamic-component-container.component';
import { DynamicComponent } from './dynamic-component.component';
import { ROUTER_CONFIG } from './dynamic-component.rouitng';

@NgModule({
    imports: [
        CommonModule,
        ROUTER_CONFIG
    ],
    declarations: [
        HelloWorldComponent,
        WorldHelloComponent,
        DynamicComponentContainer,
        DynamicComponent
    ],
    providers: [ ],
    exports: [
        HelloWorldComponent,
        WorldHelloComponent,
        DynamicComponentContainer,
        DynamicComponent
    ]
})
export class DynamicComponentModule { }
