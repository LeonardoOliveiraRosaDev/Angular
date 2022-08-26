import { Directive, ElementRef } from '@angular/core';
// ElementRef uma classe tao importante, ela esta por tras tipo em segundo plano para que qualquer coisa do angular seja renderizado
// por tras div , h1 h2. p, imput . Ela na verdade estar por tras dessa renderização.


@Directive({
  // Tudo que tiver aqui para baixo e uma diretiva na tag selector diz o nome dela que é appAlterarTexto

  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {

    // prativar referencia de instancia da classe ElementRef()
    // para criar um objeto referencial a partir do construtor da classe
  constructor(elementoHTML:ElementRef) { 

    // 1º passo: fazer uso da função auxiliar - log() - 
    // observar o comportamento da diretiva a partir do 
    // console do browser
    console.log(elementoHTML)

    // 2º passo: fazer uso do objeto referencial elementoHTML
    // para que a diretiva altere a view na qual ela for aplicada
    elementoHTML.nativeElement.innerText = 'Texto inserido -  feito na view - a partir de uma diretiva de componente/customizada'

  }

}
