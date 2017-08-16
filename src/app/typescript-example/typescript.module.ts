import { NgModule } from '@angular/core';


import { TypescriptComponent } from '../typescript-example/typescript-example.component';
import { ROUTER_CONFIG } from './typescript.routing';

@NgModule({
    imports: [
        ROUTER_CONFIG
        
    ],
    declarations: [
        TypescriptComponent
    ],
    providers: [ ],
    exports: [
        TypescriptComponent
    ]
})
export class TypescriptModule { }
