import { Injectable } from '@angular/core';

@Injectable()
export class TextAreaService {

    constructor() { }

    getCursorPos() {
        let cursorPos: any;
        if (window.getSelection) {
            const selObj: Selection = window.getSelection();
            const selRange = selObj.getRangeAt(0);
            cursorPos =  this.findNode(selObj.anchorNode.parentNode.childNodes, selObj.anchorNode) + selObj.anchorOffset;
            return cursorPos;
        } else if ((document as any).selection) {
            const range: any = (document as any).selection.createRange();
            const bookmark: any = range.getBookmark();
            cursorPos = bookmark.charCodeAt(2) - 11; /* Undocumented function [3] */
            return cursorPos;
        }
    }

    private findNode(list: NodeList, node: any) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === node) {
                return i;
            }
        }
        return -1;
    }

}
