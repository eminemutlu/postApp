import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  pure: false
})
export class ShortenPipe implements PipeTransform {

  transform(value: any) : string {
    if(value.length > 180) {
      return value.substr(0, 170) + '...';
    } else {
      return value;
    }
      
  }

}
