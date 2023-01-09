import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog.component";

const routes: Route[] = [
  {
    path: '',
    component: BlogComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BlogComponent
  ]
})
export class BlogRoutingModule {

}
