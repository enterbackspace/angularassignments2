import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value:any, ...args: any[]): any {
    var k=args[0]
    var arr=value.sort(function(a:any,b:any){
      if(a[k]>=b[k]){
        return -1
      }else{
        return 1
      }
    })
    return arr;
  }

}
 
