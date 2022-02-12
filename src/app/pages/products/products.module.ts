import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsComponent} from "./products.component";
import {ProductCardModule} from "../../components/product-card/product-card.module";


@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    CommonModule,
    ProductCardModule
  ]
}) export class ProductsModule{};
