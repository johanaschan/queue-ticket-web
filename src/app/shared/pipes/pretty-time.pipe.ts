import { Pipe, PipeTransform } from '@angular/core';
const prettyMs = require('pretty-ms');

@Pipe({
  name: 'prettyTime'
})
export class PrettyTimePipe implements PipeTransform {

  transform(value: number): string {
    return prettyMs(value / 1000000, {verbose: true, secDecimalDigits: 0});
  }

}
