import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-text-area-example',
    templateUrl: './text-area-html-string-example.html',
    styleUrls: ['./text-area-html-string-example.css'],
    encapsulation: ViewEncapsulation.Native
})
export class TextAreaHtmlStringExampleComponent {

    constructor() {

    }

    onKeyChange(event: any) {
        console.log('onKeyChange : ', event);
    }

    onKeyComplete(event: any) {
        console.log('onKeyComplete : ', event);
    }
}
