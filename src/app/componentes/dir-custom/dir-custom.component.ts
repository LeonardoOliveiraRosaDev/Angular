import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-custom',
  templateUrl: './dir-custom.component.html',
  styleUrls: ['./dir-custom.component.css']
})
export class DirCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Definir propriedade de titulo do componente
  tituloComp: string = 'Implementação Diretiva de Componente/customizada'

  
}
