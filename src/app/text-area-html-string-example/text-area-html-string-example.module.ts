import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextAreaHtmlStringExampleComponent } from '../text-area-html-string-example/text-area-html-string-example.component';
import { TextAreaComponent } from './component/textarea.component';
import { WordListComponent } from './component/word-list.component';
import { WordComponent } from './component/word.component';

import { EditFilterPipe } from './utils/edit-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextAreaHtmlStringExampleComponent,
    TextAreaComponent,
    WordListComponent,
    WordComponent,
    EditFilterPipe
  ],
  providers: [ ],
  exports: [
    TextAreaHtmlStringExampleComponent
  ]
})
export class TextAreaHtmlStringModule { }
