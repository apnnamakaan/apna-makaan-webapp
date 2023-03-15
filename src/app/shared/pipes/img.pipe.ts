import { GlobalData } from './../utils/data';
import { Apis } from './../utils/apis';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value != '') return Apis.image.path + value;
    else return GlobalData.noImageUrl;
  }
}
