import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
  }

  // Definir as propriedades que serão enviadas ao componente input (filho)
  //  e devidamente transportados
  dadosConjuntoUm: string = 'Esse é o texto que será vinculado a propriedade mensagem - no componente-filho'

  dadosConjuntoDois: string = 'Conteúdo que será vinculado com a propriedade outraMensagem - no componente-filho'

}
