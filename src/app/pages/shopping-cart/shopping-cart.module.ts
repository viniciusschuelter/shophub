import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShoppingCartComponent} from "./shopping-cart.component";
import {PriceModule} from "../../pipes/price/price.module";
import {AwesomeTooltipModule} from "../../directives/tooltip/tooltip.module";
import {SumPriceModule} from "../../pipes/sum-price/sum-price.module";


@NgModule({
  declarations: [ShoppingCartComponent],
  exports: [ShoppingCartComponent],
  imports: [
    CommonModule,
    PriceModule,
    AwesomeTooltipModule,
    SumPriceModule
  ]
}) export class ShoppingCartModule{};
