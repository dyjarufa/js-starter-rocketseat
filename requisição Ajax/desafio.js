//Exercicio 1
// function checaIdade(idade){
//    return new Promise(function(resolve, reject){
//     setTimeout(() => {
//         return idade >= 17 ? resolve() : reject;
//     }, 2000);
//    });
// }

// checaIdade(20)
// .then(function(){
//     console.log("Maior que 18");
// })
// .catch(function (){
//     console.log("Menor que 18");
// });


//Exercicio 2 e 3

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function buscaRepositories(){
    var user = inputElement.value;

    if(!user) return;

    renderLoad();

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){
        renderRepositories(response.data);
    })
    .catch(function(){
        renderError();
    });
}

function renderRepositories(repositories){
    listElement.innerHTML = "";
    for (repo of repositories) {
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);

        listElement.appendChild(liElement);
    }
}

function renderLoad(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Loading...');
    var loadElement = document.createElement('li');
    loadElement.appendChild(textElement);
    listElement.appendChild(loadElement);
}


function renderError(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var erroElement = document.createElement('li');

    erroElement.style.color = '#F00';

    erroElement.appendChild(textElement);
    listElement.appendChild(erroElement);
    
}

