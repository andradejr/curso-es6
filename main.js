// Instalando o webpack => Permite que se tenha acesso de muitos arquivos js
// Instalando o webpack com yarn add webpack webpack-cli -D
//Lembrando que foi mudado o package.json alterando dependences por devDependences
//Foi criado um arquivo chamado webpack.config.js e também um funcoes.js

//Testando o webpack
/*
import {soma} from './funcoes';
console.log(soma(1,2));
import {sub} from './funcoes';
console.log(sub(4,2));
*/
// Existe também o caso da function default como vai ser mostrado abaixo
//import soma from './funcoes';


// Podemos também renomear as funções encaminhadas 
// Em um mesmo arquivo pode-se ter uma function default e várias outras normais e isso pode ser chamado do jeito abaixo
/*
import so,{soma as somaFunction} from './funcoes';
console.log(somaFunction(4,3));
*/
// Importando todas as funções.
import * as funcoes from './funcoes';
console.log(funcoes.soma(1,2));
console.log(funcoes.sub(8,6));
console.log(funcoes.mult(8,8));