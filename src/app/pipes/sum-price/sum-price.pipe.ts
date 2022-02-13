import { Pipe, PipeTransform } from '@angular/core';
import {CartProductOrder} from "../../models/cart.model";

@Pipe({
  name: 'sumPrice'
})
export class SumPricePipe implements PipeTransform {
  transform(value: CartProductOrder[] | undefined): any {
    if (!value?.length) {
      return 0;
    }
    // @ts-ignore
    return value.map(a => a.quantity * a.retailPrice).reduce((a, b) => a + b, 0);
  }
}
