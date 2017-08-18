import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { EditMode } from './model/index';
import { TextAreaComponent } from './component/index';
import { TextAreaHtmlStringExampleService } from './text-area-html-string-example.service';
import { FakeBackendProvider } from './mock-backend/mock-data-backend.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { EditEventType } from './model/index';

@Component({
    selector: 'app-text-area-example',
    template: `
            <div class="text-area-body">
                <h2>TextArea - Html format display</h2>
                <div class="btn-group">
                    <app-text-area-component #textarea 
                                             (editingStart)="onEditStart($event)"
                                             (editingFocusOn)="onEditingFocus($event)"
                                             (editingEnd)="onEditEnd($event)"
                                             (keyChange)="onKeyChange($event)"
                                             (keyComplete)="onKeyComplete($event)">
                    </app-text-area-component>
                    <app-word-list-component [items]="items" 
                                             [boxPosition]="boxPosition" 
                                             [isFocusing]="isFocusing"
                                             (wordSelect)="onWordSelect($event)"></app-word-list-component>
                </div>
            </div>
    `,
    // templateUrl: './text-area-html-string-example.html',
    styleUrls: ['./text-area-html-string-example.css'],
    providers: [
        TextAreaHtmlStringExampleService,
        FakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    encapsulation: ViewEncapsulation.Native
})
export class TextAreaHtmlStringExampleComponent {

    @ViewChild('textarea') textareaComponent: ElementRef;

    isFocusing = false;
    isSelectbox = '';
    boxPosition = {
        boxX: 0,
        boxY: 0
    };
    mode = EditMode.DML;
    items: Array<any> = [
        { id: '1', label: 'label11112' },
        { id: '2', label: 'label2' },
        { id: '3', label: 'label3' },
        { id: '4', label: 'label43' },
    ];

    _dmls: string[];
    _columns: string[];

    constructor(private textareaService: TextAreaHtmlStringExampleService) {
        this.textareaService.getDML().subscribe((res: any) => { this._dmls = res; });
        this.textareaService.getColumns('test_table1').subscribe((res: any) => { this._columns = res; });
    }

    onEditStart(event: any) {
        console.log('onEditStart!', event);
        this.items = this._dmls;
        this.isFocusing = true;
        this.boxPosition = {
            boxX: 20,
            boxY: 210
        };
    }

    onEditEnd(event: any) {
        console.log('onEditEnd!', event);
        // this.items = null;
        // this.isFocusing = false;
    }

    onEditingFocus(event: EditEventType) {
        // TODO : DML 여부 판단.
        const isDML = true;
        if (isDML) {
            this.items = this._columns;
        }
        this.isFocusing = true;
        console.log('onEditingFocus!', event);
    }

    onKeyChange(event: EditEventType) {
        console.log('onKeyChange : ', event.data);
    }

    onKeyComplete(event: any) {
        console.log('onKeyComplete : ', event);
    }

    onWordSelect(event: string) {
        console.log('onWordSelect : ', event, ( this.textareaComponent as any ).elementRef);
        ( this.textareaComponent as any).addText(event);
        this.disableWordList();
    }

    private disableWordList() {
        this.items = null;
        this.isFocusing = false;
    }
}
