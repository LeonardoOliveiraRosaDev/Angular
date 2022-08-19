import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // este é o local para registrar cada um dos componentes do projeto
    AppComponent
  ],
  imports: [
    // este é o local para registrat cada um dos modulos de dependencia do projeto
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // este e o local para registrar qualquer service do projeto
  ],
  bootstrap: [
    // este é o local onde está indicado qual sera o primeiro elemento
    // que surgira na tela assim que o projeto for executado
    AppComponent]
})
export class AppModule { }
