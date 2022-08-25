import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definir a propriedade de Titulo de componente
  tituloComp: string = 'Implementação ngClass'

  // criar uma propriedade que sera vinculada a view - posteriormente
  estiloAlterVar: string = 'cores tamanho'

  // definir uma propriedade que sera uma instancia da classe externa
  // chamar a classe criada a baixo a execução nessa outra classe
  objCSS: PropriedadesCss = new PropriedadesCss()


}


// criar uma classe externa a classe principal
class PropriedadesCss{
  cores: boolean = true
  tamanho: boolean = true
}
