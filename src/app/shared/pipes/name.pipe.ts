import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(fullName: string, ...args: any[]): string {
    var names = fullName.split(' ');

    if (args[0] == 'last') return names[1];
    else return names[0];
  }
}
