import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeComponent
  ]
})
export class HomeRoutingModule {

}
