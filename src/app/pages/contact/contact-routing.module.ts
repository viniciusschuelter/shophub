import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact.component";

const routes: Route[] = [
  {
    path: '',
    component: ContactComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ContactComponent
  ]
})
export class ContactRoutingModule {

}
