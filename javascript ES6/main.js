class List {
    
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    // constructor() { //contructo é o primeiro método a ser exceutado toda vez que instanciar um obj de um classe
    //     this.listatodo = [];//inicio a variável
    // }

    // addTodo() {
    //     this.listatodo.push('novo todo');
    //     console.log(this.listatodo);
    // }

    constructor() {
        super(); //chama o construtor da classe pai (List) para que?
        this.nomeUsuario = "Ben";
    }

    mostraUsuario(){
        console.log(this.nomeUsuario);
    }
}

const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.addTodo();
document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('nova task!');
}

MinhaLista.mostraUsuario();

///////////////////////////////////////////////////

class Matematica{
    static soma(a, b){
        return a + b;
    }
}


console.log(Matematica.soma(1, 2));
