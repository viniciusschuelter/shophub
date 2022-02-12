import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductDetailsComponent} from "./product-details.component";
import {RatingModule} from "../rating/rating.module";
import {ColorpickerModule} from "../colorpicker/colorpicker.module";


@NgModule({
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RatingModule,
    ColorpickerModule
  ]
}) export class ProductDetailsModule{};
