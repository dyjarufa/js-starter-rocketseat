const arr = [1, 2, 3, 4, 5];

// newArr = arr.map(function(item){
//     return item + 10;
// });

newArr = arr.map(item => item + 10)

console.log(arr.map(item => item + 10));


///////////////////////

const usuario = { nome: 'Ben', idade: 02 };

// function mostraIDade(usuario){
//     return usuario.idade;
// }

const mostraIdade = (usuario) => usuario.idade


console.log(mostraIdade(usuario));

/////////////////////////

const nome = "Jady";
const idade = 31;

// function mostraUsuario(nome = "Jady", idade = 18) {
//     return { nome, idade };
// }

const mostraUsuario = (nome = "Kelly", idade = 27) => ({ nome, idade }); //como estou usando um objeto para retorno, prociso colocar entre ()

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario())


//////////////////////////

// const promise = function () {
//     return new Promise(function(resolve, reject){
//         return resolve();
//     });
// }

const promise = () => new Promise((resolve, reject) =>  resolve());

console.log(promise());
