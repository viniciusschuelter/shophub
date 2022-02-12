import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {HomeModule} from "./home.module";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeModule
  ]
})
export class HomeRoutingModule {

}
