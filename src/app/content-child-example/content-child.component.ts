import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';

@Component({selector: 'app-group-title',
            template: `
                <div>{{value}}</div>
                `
            })
// tslint:disable-next-line:component-class-suffix
export class GroupTitle {
    @Input() value: string;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-button',
    template: `
        <button (click)="hello()">{{buttonValue}}</button>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ChildButtonCompnent {
    @Input() value: string;
    get buttonValue(): string { return this.value; }
    hello() { alert('hello!'); }
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'button-group',
    template: `
        <div>{{getTitle}}</div>
        <my-button value="button1"></my-button>
        <my-button value="button2"></my-button>
        <my-button value="button3"></my-button>
    `
})
// tslint:disable-next-line:component-class-suffix
export class ButtonGroup {
    @ContentChild(GroupTitle) groupTitle: GroupTitle;
    get getTitle(): string { return this.groupTitle.value; }
}

@Component({
    selector: 'app-content-child',
    template: `
        <div class="list">
            <h2>Content Child Example</h2>
            <button-group>
                <app-group-title value="button group"></app-group-title>
            </button-group>
        </div>
    `,
    styles: [`
        .list {
            background-color:#EFEFEF;
            margin-bottom:15px;
            padding:15px;
            border:1px solid #DDD;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius:3px;
        }
        h2 {
            text-align: center;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:component-class-suffix
export class ContentChildComponent {}
