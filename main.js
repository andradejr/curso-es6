//Operadores rest e spread

//Rest
/*
const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat"
};
const {nome,...resto} = usuario;
console.log(nome);
console.log(resto);
*/

//Podemos aplicar isso também em vetores
/*
const arr = [1,2,3,4];
const [a,b,...c] = arr;
console.log(a);
console.log(b);
console.log(c);
*/
//Parâmetros de funções
/*
function soma(...params){
    return params;
}
console.log(soma(1,2,3,4,5));
*/


//Spread
/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,...arr2];
console.log(arr3);
*/
// Outra utilidade do spread
const usuario = {
     nome : "Diego",
     idade : 23,
     empresa: "Rocketseat"
};
const usuario2 = {...usuario, nome: "Gabriel"};
console.log(usuario2);







