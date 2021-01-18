const empresa = {
    nome: 'rocketseat',
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
};

const {
    nome,
    endereco: { cidade, estado }
} = empresa


console.log(nome);
console.log(cidade);
console.log(estado);

/////////////////


// function mostraInfo(usuario) {
//   return `${usuario.nome} tem ${usuario.idade} anos.`;
// }

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos`;
}

console.log(mostraInfo({ nome: 'Benício', idade: 2 }));