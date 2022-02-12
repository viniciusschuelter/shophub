import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact.component";
import {ContactModule} from "./contact.module";

const routes: Route[] = [
  {
    path: '',
    component: ContactComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ContactModule
  ]
})
export class ContactRoutingModule {

}
