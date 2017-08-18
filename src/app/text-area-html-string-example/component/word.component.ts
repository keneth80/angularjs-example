
// tslint:disable-next-line:max-line-length
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { EditEventType } from '../model/index';

@Component({
    selector: 'app-word-component',
    template: `
                <span #textarea 
                      contenteditable="true"
                      (click)="onClick($event);"
                      (blur)="onblur($event);"
                      (keyup)="onKeyup($event);"></span>
              `,
    styleUrls: ['../text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent {

    @Output() editingStart = new EventEmitter();
    @Output() editingEnd = new EventEmitter();
    @Output() keyChange = new EventEmitter();
    @Output() keyComplete = new EventEmitter();

    @ViewChild('textarea') textareaEl: ElementRef;

    constructor(private elementRef: ElementRef) {
    }

    getText(): string {
        return this.textareaEl.nativeElement.innerHTML;
    }

    onClick(event: any) {
        // console.log('#filed', this.textareaEl, window.getSelection().getRangeAt(0));
        // console.log('onClick : ', event.clientX, event.clientY);
    }

    onFocus(event: any) {
        console.log('onFocus : ', event);
    }

    onblur(event: any) {
        console.log('onblur : ', event);
    }

    onKeyup(event: any) {
        if (event.keyCode === 32) { // space

        } else {
            this.keyChange.emit(new EditEventType(event, this.textareaEl.nativeElement.innerHTML));
        }
        console.log('onKeyup : ', event);
        // console.log('el : ', this.textareaEl.nativeElement);
    }
}
