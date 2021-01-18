const usuarios = [
    { nome: "Jady", idade: 31, empresa: "Rufas" },
    { nome: "Ben", idade: 2, empresa: "Babyshark" },
    { nome: 'Kel', idade: 23, empresa: "Rufas" }
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//////////////////////

const rufasMaior18 = usuarios.filter(
    usuario => usuario.empresa === "Rufas" && usuario.idade > 18
);
console.log(rufasMaior18);

//////////////////////

const usuario = usuarios.find(usuario => usuario.empresa === "Babyshark");
console.log(usuario);

//////////////////////

const calculo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);


