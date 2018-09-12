import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimefomatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'textnumfomat',
})
export class Textnumfomat implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...argsm) {
    if(value.length<11){
      return value.toLowerCase();
    }else{
      return value.substring(0,10)+"...";
    }
    // return value.toLowerCase();
  }


}
