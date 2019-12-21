"use strict";

//Templates Literals
// Esse é um jeito muito grande de concatenação.
var nome = "Robson";
var idade = 19;
console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos "); // Esse é um jeito mais simples

console.log("Meu nome \xE9 ".concat(nome, " e eu tenho ").concat(idade, " anos."));
