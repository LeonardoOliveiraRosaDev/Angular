import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importar os componentes para criar o roteamento
import { InterpolacaoComponent } from './componentes/interpolacao/interpolacao.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { CPaiComponent } from './componentes/c-pai/c-pai.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { DirCustomComponent } from './componentes/dir-custom/dir-custom.component';
import { PipeComponent } from './componentes/pipe/pipe.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {path:'interpolacao', component: InterpolacaoComponent},
  {path: 'p-binding', component: PBindingComponent},
  {path: 'e-binding', component: EBindingComponent},
  {path: 'two-way', component: TwoWayComponent},
  {path: 'rota-pai', component: CPaiComponent},
  {path: 'ng-if', component: NgIfComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'ng-class', component: NgClassComponent},
  {path: 'ng-style', component: NgStyleComponent},
  {path: 'dir-custom', component: DirCustomComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
