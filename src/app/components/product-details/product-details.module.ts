import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductDetailsComponent} from "./product-details.component";
import {RatingModule} from "../rating/rating.module";
import {ColorpickerComponent} from "../colorpicker/colorpicker.component";


@NgModule({
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RatingModule,
    ColorpickerComponent
  ]
}) export class ProductDetailsModule{};
