import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 10000000) return (value / 10000000).toFixed(2) + 'cr';

    if (value >= 100000) return (value / 100000).toFixed(2) + 'lakh';

    if (value >= 1000) return (value / 1000).toFixed(2) + 'k';

    return value;
  }
}
