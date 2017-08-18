import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TextAreaHtmlStringExampleService {

    constructor(private http: Http) { }

    getDML(): Observable<any> {
        return this.http.get(`/api/dml`)
            .map((res: Response) => {
                console.log('get dml list ==> ', res);
                return res.json();
            });
    }

    getColumns(tablename: string): Observable<any> {
        return this.http.get(`/api/${tablename}/columns`)
            .map((res: Response) => {
                console.log('get columns ==> ', res);
                return res.json();
            });
    }

    getPosition(element: any) {
        return getCaretPosition(element);
    }
}

// tslint:disable-next-line:typeof-compare
var ie = (typeof (document as any).selection !== 'undefined' && (document as any).selection.type !== 'Control') && true;
var w3 = (typeof window.getSelection !== 'undefined') && true;

export function getCaretPosition(element) {
    var caretOffset = 0;
    if (w3) {
        var range = window.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
    } else if (ie) {
        var textRange = (document as any).selection.createRange();
        var preCaretTextRange = (document as any).body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint('EndToEnd', textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

