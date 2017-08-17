import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-text-area-example',
    templateUrl: './text-area-html-string-example.html',
    styleUrls: ['./text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native
})
export class TextAreaHtmlStringExampleComponent {

    htmlstring: string;
    columnTagCss = 'column';
    spacer = '&nbsp;&nbsp;';
    isFocusing = false;

    constructor() {
        // tslint:disable-next-line:max-line-length
        this.htmlstring = `<span class="dml">SELECT</span>${this.spacer}<span class="column">column1,${this.spacer}column2</span>`
                        + `</br>`
                        + `<span class="dml">FROM</span>${this.spacer}<span class="column">table1</span>`
                        + `</br>`
                        // tslint:disable-next-line:max-line-length
                        + `<span class="where">WHERE</span>${this.spacer}<span class="column">column1</span>${this.spacer}=${this.spacer}123`;
    }

    setDMLWord(text: string): string {
        return `<span class="dml">${text}</span>`;
    }

    onClick(event: any) {
        console.log('onClick : ', event.clientX, event.clientY);
    }

    onFocus(event: any) {
        this.isFocusing = true;
        const left: number = event.view.screenLeft;
        const top: number = event.view.screenTop;
        console.log('onFocus : ', left, top);
    }

    onblur(event: any) {
        this.isFocusing = false;
        console.log('onblur : ', event);
    }

    onKeyup(event: any) {
        console.log('onKeyup : ', event);
    }
}
