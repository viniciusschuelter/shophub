import {NgModule} from '@angular/core';
import {SumPricePipe} from "./sum-price.pipe";

@NgModule({
  declarations: [
    SumPricePipe,
  ],
  exports: [
    SumPricePipe,
  ]
})
export class SumPriceModule {}
