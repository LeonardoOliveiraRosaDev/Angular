import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

   // definir a propriedade de titulo do componente
   tituloComp: string = 'Implementação Formulario'

  //criar propriedades controlar o formulario
  dadosForm: any
  propNome: any
  propEmail: any

  // chamar o hook ngOnInit para priorizar a instancia de classes
  // para controlar o formulario
  ngOnInit(): void {
    this.dadosForm = new FormGroup({
      nome: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      senha: new FormControl('')
    })
  }
// criar um método/função para exibir o "controle" que está sendo exercido - pela camada lógica - no formulário
  exibidoraDados(umDado: any): void{
    this.propNome = umDado.nome
    this.propEmail = umDado.email
  } 

}










/*
 //criar um método/função para receber os dados enviados pelo formulario
  recebedorDados(dadosRecebidos: any): void{
    let exibicao: string = 'O nome informado é: ' + dadosRecebidos.nome
    exibicao += ' e o email  informado é este: ' + dadosRecebidos.email
    alert(exibicao)
  }
*/
