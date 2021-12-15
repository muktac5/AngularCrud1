import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false,
})
export class FilterPipe implements PipeTransform {

  constructor(){
    console.log("impure function is called");
  }
  transform(value: any, name:string) {

    console.log("impure function is called, value"+value);
    if(value==="")
    {
      return value;
    }
    return value.filter((user:any)=>user.firstName.startsWith(name))
  }

}
