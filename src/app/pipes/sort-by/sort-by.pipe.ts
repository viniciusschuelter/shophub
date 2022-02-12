import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(value: any[] = [], prop: any): any[] {
    if (!prop) {
      return value.sort();
    }
    return value.sort((a, b) => a[prop]?.localeCompare(b[prop]));
  }
}
