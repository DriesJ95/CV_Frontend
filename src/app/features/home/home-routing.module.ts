import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  providers: [],
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class HomeRoutingModule {}
