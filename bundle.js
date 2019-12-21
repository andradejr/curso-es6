"use strict";

//Isso é um exemplo de função do ES6 (Função map)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newarr = arr.map(function (item) {
  return item * 2;
}); //console.log(newarr);
//A função também pode conter um index.

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newarr2 = arr2.map(function (item, index) {
  return item + index;
}); //console.log(newarr2);
//Essa função percorre todo o array e faz uma op.

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //console.log(sum);
//Essa outra operação com array filtra o próprio.

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); //console.log(filter);
//Essa outra operação é para encontra um element.

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
