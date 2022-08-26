import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definir a propriedade de titulo do componente.
  tituloComp: string = 'Implementação do Pipes'

  // criasr um conjunto de propriedade que serão vinculadas na view e manipuladas com os pipes
  umTexto: string = 'TEXTO EM MAIÚSCULO - PODE SER ALTERADO PARA MINÚSCULO'
  numFloat: number = 76.200
  nunData: Date = new Date()
  conjuntoNumerico: number = 20222022.20222022
  conjuntoDados: any = {
    nome: 'Leonardo',
    endereco:{ 
      rua: 'a Dr. Rubens Meireles',
      numero: '105'
  }
  }
  mesesAno: Array<string> = [ 'Jan', 'Fev', 'Mar', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov','Dez']
  numPercent: number = 0.41
}
 
