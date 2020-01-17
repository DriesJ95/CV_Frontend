import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from '@app/features/profile/profile.component';


export const ROUTES: Routes = [
  { path: '', component: ProfileComponent}
];


@NgModule({
  providers: [],
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class ProfileRoutingModule {}
