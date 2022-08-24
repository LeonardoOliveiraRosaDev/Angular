import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // Definir a propriedade de titulo do componete
  tituloComp: string = 'Implementação @Output property'

/*
    Criar um "anunciador" de evento que vai enviar um dataset(conjunto de dados) para o componente pai
    aqui, abaixo. será definida a propriedade de saida de dados
  
*/

@Output() anunciadorEvento = new EventEmitter<any>()

// Criar um conjunto de dados
conjuntoDados: any = {}
// key: value
// nome: Leonardo
// email: leonardo@leonardo.com
// Criar um método/função para fazer uso do objeto anunciadorEvento
// para enviar os dados para o componente pai

enviarDados(): void{
  this.anunciadorEvento.emit(this.conjuntoDados)
}

}
