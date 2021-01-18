var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button')

// todos = [
//     'Fazer café',
//     'curtir a família',
//     'estudar javascript'
// ];

 todos = JSON.parse(localStorage.getItem('lista-todo')) || [];// se eu nao conseguir recuperar o valor json.parse eu passo um vetor vazio []

function renderTodo(){
    listElement.innerHTML = ''; //Remove todo conteúdo que estiver dentro da lista no momento que for chamado 
    for (todo of todos) {
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('excluir');
        linkElement.appendChild(linkText);

        var pos = todos.indexOf(todo); //busco a posição naquele momento(todo) dentro do meu vetor (todos)

        linkElement.setAttribute('onclick', 'excluirTodo(' + pos +')');

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
        
    }

}

renderTodo();

function addToDo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    salvanoStorageTodos();
    
}

buttonElement.onclick = addToDo;

function excluirTodo(pos){
    todos.splice(0, 1); //splice -> a partir da posição 0 delete 1 item
    renderTodo();
    salvanoStorageTodos();
};

function salvanoStorageTodos(){
    localStorage.setItem('lista_todo', JSON.stringify(todos)); //localstorage variável global. JSON trabalha com chave-valor, strinfy converte para formato JSON.
}
