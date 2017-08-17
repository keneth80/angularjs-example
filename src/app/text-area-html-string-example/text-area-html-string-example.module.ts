import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextAreaHtmlStringExampleComponent } from '../text-area-html-string-example/text-area-html-string-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextAreaHtmlStringExampleComponent
  ],
  providers: [ ],
  exports: [
    TextAreaHtmlStringExampleComponent
  ]
})
export class TextAreaHtmlStringModule { }
