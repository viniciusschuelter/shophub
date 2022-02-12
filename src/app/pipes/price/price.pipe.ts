import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '$0.00';
    }
    return `$${value}.00`;
  }
}
