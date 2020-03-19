import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true,
})
export class TruncatePipe implements PipeTransform {

  public transform(value: string, count: number): string {
    if (value) {
      return value.length > count ? value.substring(0, count) + '...' : value;
    }
  }

}
