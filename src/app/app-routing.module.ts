// Centralizador de Recursos
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar os componentes para criar o roteamento
import { InterpolacaoComponent } from './componentes/interpolacao/interpolacao.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
const routes: Routes = [
{path:'interpolacao', component: InterpolacaoComponent },
{path: 'p-binding' , component: PBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
