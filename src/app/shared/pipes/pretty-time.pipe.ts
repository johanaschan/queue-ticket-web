import { Pipe, PipeTransform } from '@angular/core';
const prettytime = require('prettytime');

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number): string {
    return prettytime(value / 1000);
  }

}
