//Desestruturação
const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
     cidade:"Rio do sul",
     estado:"SC",
    },
};
/*
const nome = usuario.nome;
const endereco = usuario.endereco.cidade;
*/
// No ES6 é possível usar outra sintaxe para acessar dados de uma classe

/*
const {nome,idade,endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
*/
// É possível usar essa sintaxe numa function
function mostranome({nome,idade}){
    console.log(nome,idade);
}
mostranome(usuario);