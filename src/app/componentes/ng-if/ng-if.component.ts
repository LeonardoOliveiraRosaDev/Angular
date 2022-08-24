import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definir a propriedade de titulo do componente
  tituloComp: string = 'Implementação do *ngIf'

  // Criar uma propriedade a ser vinculada com a nossa view
  //  E avaliada pela diretiva *ngIf. Quando existe a ausência
  // de um valor definido, diretamente, para uma
  // propriedade booleana o TS/Angular interpretam essa
  // propriedade como um elemento com padrão - FALSE 
  exiba!: boolean 

}
