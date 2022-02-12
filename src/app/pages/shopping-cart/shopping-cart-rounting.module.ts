import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart.component";
import {ShoppingCartModule} from "./shopping-cart.module";

const routes: Route[] = [
  {
    path: '',
    component: ShoppingCartComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ShoppingCartModule
  ]
})
export class ShoppingCartRountingModule {

}
