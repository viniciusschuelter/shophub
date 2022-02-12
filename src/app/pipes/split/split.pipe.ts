import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(value: string,  split: string): string {
    if (!split) {
      return value || '';
    }
    return value.split(split)[0] || value || '';
  }
}
