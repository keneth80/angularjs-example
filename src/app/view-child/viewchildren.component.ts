import { Component, Input, ViewChildren, QueryList, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
// 예제
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'view-children-child',
    template: '{{getName}}'
})
export class ChildComponent {
    @Input() childname: string;
    get getName(): string{
        return this.childname;
    }

    public printName() {
        console.log(this.childname);
    }
}

// 실습
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'child-name-component',
    template: '{{getName}}'
})
export class ChildNameComponent {
    @Input() name: string;
    get getName(): string{
        return this.name;
    }
}

@Component({
    selector: 'app-view-children',
    template: `
        <div class="list">
            <h2>ViewChild Example</h2>
            <view-children-child #child1 [childname]="'child1'"></view-children-child>, {{child1.childname}}, {{child1.getName}}<br>
            <view-children-child #child2 [childname]="'child2'"></view-children-child>, {{child2.childname}}, {{child2.getName}}<br>
            <view-children-child #child3 [childname]="'child3'"></view-children-child>, {{child3.childname}}, {{child3.getName}}<br><br>
            <view-children-child #chd4 [childname]="'child4'"></view-children-child>, {{chd4.childname}}, {{chd4.getName}}<br>
            <br>

            <child-name-component #cd1 [name]="'child name 1'"></child-name-component>{{cd1.getName}}<br>
            <child-name-component #cd2 [name]="'child name 2'"></child-name-component>{{cd2.getName}}<br>
            <child-name-component #cd3 [name]="'child name 3'"></child-name-component>{{cd3.getName}}<br><br>
            <br>
        </div>
    `,
    styles: [`
        .list {
            background-color:#EFEFEF;
            border:1px solid #DDD;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius:3px;
        }
    `],
    encapsulation: ViewEncapsulation.None
    })

    export class ViewChildrenComponent implements OnInit, AfterViewInit {
        // 예제
        @ViewChildren('child1,child2,child3,chd4') children: QueryList<ChildComponent>;
        // 실습
        @ViewChildren('cd1,cd2,cd3,cd4') chidrens: QueryList<ChildNameComponent>;

        ngOnInit() {
            console.log('OnInit => children : ', this.children, ', chidrens : ', this.chidrens );
        }

        ngAfterViewInit() {
            console.log('ngAfterViewInit => children : ', this.children, ', chidrens : ', this.chidrens );
            this.children.toArray().forEach((child) => child.printName());
        }

}
