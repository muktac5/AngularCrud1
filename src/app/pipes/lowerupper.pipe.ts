import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerupper'
})
export class LowerupperPipe implements PipeTransform {

  transform(value: string, temptype: string): string{
    var stringtoreturn="";

    if(temptype=='ToUpper')
    {
      return value.toUpperCase();
    }
    if(temptype=='ToLower')
    {
      return value.toLowerCase();
    }
    else{
      return  value[0].toUpperCase() + 
      value.slice(1);
    }
  }

}
