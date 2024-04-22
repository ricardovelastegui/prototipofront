import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultprod=[];
    for(const producto of value){
      if(producto.nombre.indexOf(arg) > -1){
        resultprod.push(producto);
      };
    };
    return resultprod;
  }

}
