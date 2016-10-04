import { Pipe, PipeTransform } from '@angular/core';
const prettyTime = require('pretty-time');

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number): string {
    return prettyTime(value, 's');
  }

}
