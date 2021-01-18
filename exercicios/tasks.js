class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}


class Admin extends Usuario {
    constructor(email, Usuario) {
        super(email, usuario);
        this.admin = true;
    }
}

const usuario = new Usuario("usuario@mail.com", "usuario");
const admin = new Admin("admin@mail.com", "admin");

console.log(usuario.isAdmin());
console.log(admin.isAdmin());