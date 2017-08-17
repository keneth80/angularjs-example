import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextAreaHtmlStringExampleComponent } from '../text-area-html-string-example/text-area-html-string-example.component';
import { TextAreaComponent } from './component/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextAreaHtmlStringExampleComponent,
    TextAreaComponent
  ],
  providers: [ ],
  exports: [
    TextAreaHtmlStringExampleComponent
  ]
})
export class TextAreaHtmlStringModule { }
