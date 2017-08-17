import { Component, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-word-component',
    template: `
                <ul class="word-list">
                    <li *ngFor="let item of items">
                        <a class="dropdown-item">
                            <span>{{item.label}}</span>
                        </a>
                    </li>
                </ul>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native
})
export class WordComponent {

    @Input()
    set items(value: Array<any>) {
        this._items = value;
    }

    get items(): Array<any> {
        return this._items;
    }

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
    private _items: Array<any>;

    constructor() {
        this.htmlstring = 'This select box!';
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

}
