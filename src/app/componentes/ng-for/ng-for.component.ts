import { Component, OnInit } from '@angular/core';
// importação do Model
import {Filme} from '../../model/filme';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Definir a propriedade de titulo do componente
  tituloComp: string = '5 Filmes sensacionais!'

// criar os dados rferntes aos 5 filmes que serão exibidos na viewe
// tipo construido = uma determinada estrutura de código/recurso
filmes: Filme [] = [
  new Filme('O Poderoso Chfão', 'Francis Ford Copolla', 'Marlon Brando e outros', '1972'),
  new Filme('Um estranho no Ninho', 'Milos Forman', 'Jack Nicholson e outros', '1976'),
  new Filme('A lista de Schindles', 'Steven Spielberg', 'Lian Neesson e outros', '1993'),
  new Filme('Forest Gump', 'Robert Zemicks', 'Tom Hanks e outros', '1994'),
  new Filme('Laranja Mecanica', 'Stanley Kubrik', 'Malcolm Mcdoewel outros', '1971'),
]


}
