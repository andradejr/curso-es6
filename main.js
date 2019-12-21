//Object short syntax
const nome = "Robson";
const idade = 19;
/*
const usuario = {
    nome : nome,
    idade : idade,
    empresa : "Rocketseat"
};
*/
// Quando a syntax acima aparecer a propriedade pode ser deixada sozinha.
const usuario = {
    nome,
    idade,
    empresa: "Rocketseat"
};
console.log(usuario);