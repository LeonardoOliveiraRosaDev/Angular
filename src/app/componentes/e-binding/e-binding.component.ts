import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // definir as propriedades que serão vinculadas
  tituloComp: string = 'Implementação Event Binding'

  // Criar um médoto/função para vincular à view
  // quando o usuário interagin com a Aplicação
  exibirAlerta(): void{
    console.log('Botão Clicado !')

    // Estabelecer os dados que serão vinculados pela view
    alert('Um evento - Através da view - foi desparado. Por isso este texto está sendo exibido!')
  }
}
