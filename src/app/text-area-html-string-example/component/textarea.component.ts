
// tslint:disable-next-line:max-line-length
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterContentInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TextAreaService } from './textarea.service';
import { EditEventType } from '../model/index';

@Component({
    selector: 'app-text-area-component',
    template: `
                <div #textarea class="editor" 
                    contenteditable="true" 
                    (click)="onClick($event);"
                    (focus)="onFocus($event);"
                    (blur)="onblur($event);"
                    (keyup)="onKeyup($event);"></div>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    providers: [TextAreaService],
    encapsulation: ViewEncapsulation.Native,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent implements AfterContentInit {

    @Output() editingStart = new EventEmitter();
    @Output() editingFocusOn = new EventEmitter();
    @Output() editingEnd = new EventEmitter();
    @Output() keyChange = new EventEmitter();
    @Output() keyComplete = new EventEmitter();

    @ViewChild('textarea') textareaEl: ElementRef;

    htmlstring: string;
    columnTagCss = 'column';
    spacer = '&nbsp;';

    private isEdit = false;

    constructor(private elementRef: ElementRef) {
        // test code
        this.htmlstring = `<span class="dml">SELECT</span>${this.spacer}<span class="column">column1,${this.spacer}column2</span>`
            + `</br>`
            + `<span class="dml">FROM</span>${this.spacer}<span class="column">table1</span>`
            + `</br>`
            // tslint:disable-next-line:max-line-length
            + `<span class="where">WHERE</span>${this.spacer}<span class="column">column1</span>${this.spacer}=${this.spacer}123`;
    }

    addText(value: string) {
        this.textareaEl.nativeElement.innerHTML += value + this.spacer;
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

    onClick(event: any) {
        if (!this.textareaEl.nativeElement.innerHTML) { // first step : DML list display
            this.editingStart.emit(event);
        } else {
            this.editingFocusOn.emit(new EditEventType(event, this.textareaEl.nativeElement.innerHTML));
        }
        // console.log('#filed', this.textareaEl, window.getSelection().getRangeAt(0));
        // console.log('onClick : ', event.clientX, event.clientY);
    }

    onFocus(event: any) {
        this.isEdit = true;
        const left: number = event.view.screenLeft;
        const top: number = event.view.screenTop;
        // console.log('onFocus : ', left, top, event);
    }

    onblur(event: any) {
        this.isEdit = false;
        this.editingEnd.emit(new EditEventType(event, this.textareaEl.nativeElement.innerHTML));
        // console.log('onblur : ', event);
    }

    onKeyup(event: any) {
        if (event.keyCode === 32) { // space

        } else {
            this.keyChange.emit(new EditEventType(event, this.textareaEl.nativeElement.innerHTML));
        }
        // console.log('onKeyup : ', event);
        // console.log('el : ', this.textareaEl.nativeElement);
    }

}
