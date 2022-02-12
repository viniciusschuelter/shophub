import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, target: string, replaced: string): string {
    if (!target && !replaced) {
      return value || '';
    }
    return value.replace(target, replaced) || '';
  }
}
