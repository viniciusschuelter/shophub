import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductCardComponent} from "./product-card.component";
import {RouterModule} from "@angular/router";
import {PriceModule} from "../../pipes/price/price.module";


@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PriceModule
  ]
}) export class ProductCardModule{};
