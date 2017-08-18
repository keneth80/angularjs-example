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

    getPosition(el: any) {
        let xPosition = 0;
        let yPosition = 0;

        while (el) {
            if (el.tagName === 'BODY') {
                const xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                const yScrollPos = el.scrollTop || document.documentElement.scrollTop;
                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            } else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }

}
