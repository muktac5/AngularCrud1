import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, tempType:string): number {
    var itemperaturetoreturn=0;
    if(tempType=='tocelcius')
    itemperaturetoreturn=(value-32)/1.8;
    else if(tempType=='tofaren')
    itemperaturetoreturn=(value*1.8)+32;

    return itemperaturetoreturn;
  }

}
