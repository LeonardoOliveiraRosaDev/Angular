import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  // esse é um contrutor padrao da classe InterpolacaoComponet
  constructor() { }
  // ngOnInit é um hook(gancho) Angular
  ngOnInit(): void {
  }

    // Estalabelecer o conjunto de propriedades que será vinculada na view
    tituloComp: string = 'Implementação Interpolation binding'

    x: number = 10
    umArray: Array<string> = ['Amanda', 'Anderson', 'Eduardo', 'Kauane', 'Leonardo', 'Luiz', 'Nicario', 'Renata', 'Renato', 'Valdir', 'Wooldson']
    dataHoje: Date = new Date()
    statusBoleano: boolean = true
    
    // Criar um método/função
    exibirTexto(): string {
      // utilizar nescessariamente, uma expressão de retorno
      return 'Texto retornado a partir de chamada da função !'
    }

  }

