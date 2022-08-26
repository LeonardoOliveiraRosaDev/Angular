import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // definir a propriedade com o titulo do componente
    tituloComp: string = 'Implementação ng-style'

  // criar algumas propriedades para vincular a view - com o uso da diretiva ng-style
  cores: string = '#023ef2'
  tamanho: number = 18


  // praticar a instancia da classe externa EstiloCss instanciar é criar um objeto. 
  objStyle: EstiloCss = new EstiloCss()

}

// classe externa definida com algumas propriedades de estilos
class EstiloCss{
  'color': string = '#b9e507'
  'font-size.%': number = 150
  'font-weight': string = 'bold'
}
