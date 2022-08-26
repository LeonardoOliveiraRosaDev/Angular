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
import { OutputComponent } from './componentes/output/output.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { DirCustomComponent } from './componentes/dir-custom/dir-custom.component';
import { PipeComponent } from './componentes/pipe/pipe.component';

// Importar os recursos nescessarios para "regionalizar" a transformação da moeda em Real Brasileira adequadamente
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PipeRaizQuadradaPipe } from './pipe-raiz-quadrada.pipe';
import { FormularioComponent } from './componentes/formulario/formulario.component';

// chamando uma funcao 
registerLocaleData(localePt, 'pt')
@NgModule({
  declarations: [
    // este é o local para registrar cada um dos componentes do projeto
    AppComponent,
    InterpolacaoComponent,
    PBindingComponent,
    EBindingComponent,
    TwoWayComponent,
    CPaiComponent,
    InputComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    AlterarTextoDirective,
    DirCustomComponent,
    PipeComponent,
    PipeRaizQuadradaPipe,
    FormularioComponent
  ],
  imports: [
    // este é o local para registrat cada um dos modulos de dependencia do projeto
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // este e o local para registrar qualquer service do projeto
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [
    // este é o local onde está indicado qual sera o primeiro elemento
    // que surgira na tela assim que o projeto for executado
    AppComponent]
})
export class AppModule { }
