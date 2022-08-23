import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definir as propriedades de entrada de dados
  // que receberão do componente-pai o conjunto de dados especifico
  tituloComp: string = 'Implementação Input Propety'

  // Fazendo uso do decorator @Inpunt()]
  @Input() mensagem: string = ''
  @Input() outraMensagem: string = ''

  // Definir um método/função para ser vinculado - com seu conteúdo - na view do componente
  exibirMensagemAlerta(): void {
    // exibir o conteúdo da propriedade outraMensagem: string
    alert(this.outraMensagem)
  
  }
}

