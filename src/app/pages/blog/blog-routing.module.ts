import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog.component";
import {BlogModule} from "./blog.module";

const routes: Route[] = [
  {
    path: '',
    component: BlogComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BlogModule
  ]
})
export class BlogRoutingModule {

}
