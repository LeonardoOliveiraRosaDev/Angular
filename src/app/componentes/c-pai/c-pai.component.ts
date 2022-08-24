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


// Criar um metodo/funcao para lidar/tratar com os dados
// interceptados pelo c-pai
recebedorDados(dadosRecebidos: any): void{
    // dados recebidos e, agora, serrão manipulados por este 
    // método / função
    let manipuladora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.' + '\n'
    // acessar a variavel manipuladora e acrescentar a ela mais uma informação
    manipuladora = manipuladora + ' o e-mail ' + dadosRecebidos.email + ' foi cadastrado com sucesso!'

    // Exibir esse conteúdo em uma janela de alerta
    alert(manipuladora)
}

  // // Definir as propriedades que serão enviadas ao componente input (filho)
  // //  e devidamente transportados
  // dadosConjuntoUm: string = 'Esse é o texto que será vinculado a propriedade mensagem - no componente-filho'

  // dadosConjuntoDois: string = 'Conteúdo que será vinculado com a propriedade outraMensagem - no componente-filho'

}
