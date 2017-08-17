import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigurationService } from './file-read.service';
import { FileReadComponent } from '../file-read-example/file-read.component';
import { ROUTER_CONFIG } from './file-read.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ROUTER_CONFIG
    ],
    declarations: [
        FileReadComponent
    ],
    providers: [ ],
    exports: [
        FileReadComponent
    ]
})
export class FileReadModule { }
