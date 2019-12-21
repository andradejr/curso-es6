//Arrow functions
/*
const arr = [1,2,3,4,5,6,7,8,9];
const newarr = arr.map( item => item * 2);
console.log(newarr);
*/

//Outra forma de sintaxe para function

/*const teste = () => {
    return "Teste";
}
console.log(teste());
*/ 

//Caso eu queira retornar um array:
// No lugar do array pode ser uma string ou number.
/*
const teste = () => [1,2,3];
console.log(teste());
*/
//Nesse caso ele já retorna os valores do array.

// caso eu queira retornar um objeto na function
const teste = () => ({nome:"Diego"});
console.log(teste());