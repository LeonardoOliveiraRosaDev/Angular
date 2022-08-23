import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacaoComponent } from './componentes/interpolacao/interpolacao.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { CPaiComponent } from './componentes/c-pai/c-pai.component';
import { InputComponent } from './componentes/input/input.component';

@NgModule({
  declarations: [
    // este é o local para registrar cada um dos componentes do projeto
    AppComponent,
    InterpolacaoComponent,
    PBindingComponent,
    EBindingComponent,
    TwoWayComponent,
    CPaiComponent,
    InputComponent
  ],
  imports: [
    // este é o local para registrat cada um dos modulos de dependencia do projeto
    BrowserModule,
    AppRoutingModule,
    FormsModule
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
