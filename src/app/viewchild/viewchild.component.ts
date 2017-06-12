import {AfterViewInit, Component, Directive, Input, ViewChild} from '@angular/core';

// 예제
// tslint:disable-next-line:directive-selector
@Directive({ selector: 'item' })
// tslint:disable-next-line:directive-class-suffix
export class Item {
    @Input() status: boolean;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'item-component',
    template: '<button>알림창</button>'
})
export class ItemComponent {
    display() {
        alert('ItemComponent입니다');
    }
}

// 실습
// tslint:disable-next-line:directive-selector
@Directive({ selector: 'item1'})
export class Item1 {
    @Input() staus1: boolean;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'item-component1',
    template: '<button>알림Test</button>'
})

// tslint:disable-next-line:component-class-suffix
export class ItemComponent1 {
    display(){
        alert('1234');
    }
}

@Component({
    selector: 'app-view-child',
    template: `
    <item status="false" *ngIf="isShow==false"></item>
    <item status="true" *ngIf="isShow==true"></item>
    <button (click)="toggle()">선택</button><br>
    <item1 staus1="true"></item1>
    isShow : {{isShow}}<br>
    status : {{status}}<br>
    item1 :{{staus1}}<br>
    <item-component (click)="display()"></item-component>
    <item-component1 (click)="display1()"></item-component1>
    `
})
export class ViewchildComponent {

    // 예제
    @ViewChild(Item)
    set item(v: Item) {
        setTimeout(() => { this.status = v.status; }, 0);
    }

    @ViewChild(ItemComponent) itemComponent: ItemComponent;
    isShow = true;
    status: boolean;

    // 실습
    @ViewChild(Item1)
    set item1(s: Item1) {
        setTimeout(() => { this.staus1 = s.staus1; }, 0);
    }

    @ViewChild(ItemComponent1) ItemComponent1: ItemComponent1;
    staus1: boolean;

    display1() {
        this.ItemComponent1.display();
    }

    toggle() {
        this.isShow = !this.isShow;
    }

    display() {
        this.itemComponent.display();
    }

}
