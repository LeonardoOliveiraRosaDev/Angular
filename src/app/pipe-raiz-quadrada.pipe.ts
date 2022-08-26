import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeRaizQuadrada'
})
export class PipeRaizQuadradaPipe implements PipeTransform {

  transform(numero: number): number{
    // sqrt square root raiz quadrada
    return Math.sqrt(numero)
  
  }

}
