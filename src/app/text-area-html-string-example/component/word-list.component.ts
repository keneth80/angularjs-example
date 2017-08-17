import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-word-list-component',
    template: `
                <ul class="word-list">
                    <li *ngFor="let item of items">
                        <a class="dropdown-item" (click)="select(item);">
                            <span>{{item.label}}</span>
                        </a>
                    </li>
                </ul>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native
})
export class WordListComponent {

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

    @Output() wordSelect = new EventEmitter();

    htmlstring: string;
    columnTagCss = 'column';
    isFocusing = false;

    private _word: string;
    private _items: Array<any>;

    constructor() {
        this.htmlstring = 'This select box!';
    }

    select(word: any) {
        this.wordSelect.emit(word);
    }

}
