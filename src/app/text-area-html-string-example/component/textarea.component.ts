import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterContentInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-text-area-component',
    template: `
                <div class="btn-group">
                    <div #textarea class="editor" 
                        contenteditable="true" 
                        [innerHTML]="htmlstring"
                        (click)="onClick($event);"
                        (focus)="onFocus($event);"
                        (blur)="onblur($event);"
                        (keyup)="onKeyup($event);"></div>
                    <app-word-list-component [items]="_items"></app-word-list-component>
                </div>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent implements AfterContentInit {

    @Output() keyChange = new EventEmitter();
    @Output() keyComplete = new EventEmitter();

    @ViewChild('textarea') textareaEl: ElementRef;

    htmlstring: string;
    columnTagCss = 'column';
    spacer = '&nbsp;';
    isFocusing = false;
    isSelectbox = '';
    boxX = 0;
    boxY = 0;

    _items: Array<any> = [
        {id: '1', label: 'label1'},
        {id: '2', label: 'label2'},
        {id: '3', label: 'label3'},
        {id: '4', label: 'label4'},
    ];

    constructor(private elementRef: ElementRef) {
        // test code
        this.htmlstring = `<span class="dml">SELECT</span>${this.spacer}<span class="column">column1,${this.spacer}column2</span>`
                        + `</br>`
                        + `<span class="dml">FROM</span>${this.spacer}<span class="column">table1</span>`
                        + `</br>`
                        // tslint:disable-next-line:max-line-length
                        + `<span class="where">WHERE</span>${this.spacer}<span class="column">column1</span>${this.spacer}=${this.spacer}123`;
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

    onClick(event: any) {
        console.log('onClick : ', event, event.clientX, event.clientY);
        this.boxX = event.clientX;
        this.boxY = event.clientY;
    }

    onFocus(event: any) {
        this.isFocusing = true;
        const left: number = event.view.screenLeft;
        const top: number = event.view.screenTop;
        console.log('onFocus : ', left, top, event);
    }

    onblur(event: any) {
        this.isFocusing = false;
        console.log('onblur : ', event);
    }

    onKeyup(event: any) {
        console.log('onKeyup : ', event);
        console.log('el : ', this.textareaEl.nativeElement);
    }

}
