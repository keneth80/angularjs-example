import { Component, Input } from '@angular/core';
import { Friend } from './model/promise.model';

@Component({
  selector: 'frlist-component',
  template: `
  <b>{{title}}</b>
  <div *ngFor="let o of list">
      {{o.age}} | {{o.name}} 
  </div><br>`,
})
export class FriendListComponent {
  @Input() title: string;
  @Input() list: Friend;
}
