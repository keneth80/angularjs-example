import { RouterModule, Routes } from '@angular/router';

import { ParentFriendComponent } from './parent-friend.component';

const ROUTER_DATA: Routes = [
  { path: 'ParentFriend', component: ParentFriendComponent }
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
