import { RouterModule, Routes } from '@angular/router';

import { FriendListComponent } from './parent-friend.component';

const ROUTER_DATA: Routes = [
  { path: 'FriendList', component: FriendListComponent },
];

export const ROUTER_CONFIG = RouterModule.forChild(ROUTER_DATA);
