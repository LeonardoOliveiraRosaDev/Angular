PARA INSTALAR O ANGULAR NO COMPUTADOR    -  FRAMEWORK 
 
 
  - npm install -g @angular/cli


VERIFICAR SE FOI INSTALADO E VER A VERSAO
 

  - ng version


CRIAR PROJETO ANGULAR

    - ng new (nome do projeto) angular-alpha
    - escolher Yes para definir as rotas
    - depois escolher como sera o estilo no caso sera em CSS

SÓ AGUARDAR O ANGULAR INSTALAR AS DEPENDENCIAS DO PROJETO DO ANGULAR !    

Pronto para usar

PARA CRIAR COMPONENTE

ng generate componente nomeComponente
ng g c nome

Manipulaçao de informacoes na View
Iterpolação {{}}
p-binding []
e-binding ()
two-way Binding [()] 
      - Para que ele funcione tem que importar para o app modules   -->>> import { FormsModule } from '@angular/forms';
      - E tambem no import adicionar    ->>> FormsModule



- 1º criaa a Rota no app-routing.modules.ts
- 2º criar estrutura de navegação na view principal app.component.html
- 3º Na nossa camada logia .ts do novo componente
- 4º in na nossa view do novo html

Input Binding

1º - Criar o Componente pai
          - ng g c c-pai

2º - Criar o Componente filho como input      
          - ng g c input   

3º - Criar a rota . Apenas para o componente pai , por que ai Relaçao entre pai e filho sera direto pelo pai no caso o
  o input que seria o filho sendo assim nao precisa criar rota para o filho
        - app-routing.modules.ts     

4º - Criar a estrutura de Navegação no:
        - app.component.html    

5º - no input.components.ts
        - tb importar o input    
            - import { Component, OnInit, Input } from '@angular/core';            