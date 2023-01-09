import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductDetailsComponent} from "../../components/product-details/product-details.component";
import {ProductDetailsModule} from "../../components/product-details/product-details.module";

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':productId',
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductsComponent,
    ProductDetailsModule
  ]
})
export class ProductsRoutingModule {

}
