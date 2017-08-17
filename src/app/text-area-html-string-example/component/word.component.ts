import { Component, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-word-component',
    template: `
                <div class="word" 
                     contenteditable="true" 
                     [innerHTML]="htmlstring"></div>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native
})
export class WordComponent {

    @Input()
    set word(value: string) {
        this._word = value;
    }

    get word(): string {
        return this._word;
    }

    htmlstring: string;
    columnTagCss = 'column';
    isFocusing = false;

    private _word: string;

    constructor() {
        this.htmlstring = 'This select box!';
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

}
