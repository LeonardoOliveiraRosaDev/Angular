/*

Esta classe será o model domain do componente ng-for. Será o conjunto de "regras" (estrutura de formato) pelas
quais é possível tratar os dados que serão manipulados pelo componente

*/

export class Filme{
    // deefinir as propriedades/atributos/fields que compõe o model
    titulo: string
    direcao: string
    elenco: string
    anoLancamento: string


    /*
    
    definir um construtor para a classe e dessa ter a possibilidade de referenciar,
    devidamente, cada das propriedade já indicadas e, agora, inicializadas.
    O construtor nada mais é do que um método/função especial que "contrói" a classe
    
    */

    constructor (titulo: string, direcao: string, elenco: string, anoLancamento: string){
        // Acessar as propriedades/atributos/fields descritos inicialmente na estrutura classe
        this.titulo = titulo
        this.direcao = direcao
        this.elenco = elenco
        this.anoLancamento = anoLancamento
    }


}
