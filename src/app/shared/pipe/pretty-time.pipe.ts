import { Pipe, PipeTransform } from '@angular/core';
const pretty = require('pretty-time');

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number): string {
    return pretty(value, 's');
  }

}
