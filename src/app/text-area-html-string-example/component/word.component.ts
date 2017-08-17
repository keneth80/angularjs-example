import { Component, OnInit, OnChanges, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-word-component',
    template: `
                <ul class="word-list" 
                 *ngIf="isFocusing"
                     (keyup)="keyUp($event)"
                     contenteditable="true" 
                     [ngStyle]="setStyles()">

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
export class WordComponent implements OnChanges {
    @Input() boxPosition: any;
    @Input() isFocusing: boolean;
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

    private _word: string;
    private _items: Array<any>;

    constructor() {
        this.htmlstring = 'This select box!';
    }

    ngOnChanges() {
        console.log('ngOnChanges', this.isFocusing);
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

    setStyles() {
        console.log(this.boxPosition);
        let styles = {
            // CSS property names
            'left': this.boxPosition.boxX + 'px',
            'top': this.boxPosition.boxY + 'px',
            'position': 'absolute'
        };

        return styles;
    }

    keyUp(event) {
        console.log('keyUp', event);
    }
}