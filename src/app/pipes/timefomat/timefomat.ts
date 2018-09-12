import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimefomatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timefomat',
})
export class TimefomatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value="101";
    return value.toLowerCase();
  }
}
