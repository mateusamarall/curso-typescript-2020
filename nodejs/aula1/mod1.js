class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}


const nome = 'mateus';
const sobrenome = 'amaral';
// module.exports = {
//     nome, sobrenome, Pessoa,
// }

exports.nome = nome;
module.exports.sobrenome = sobrenome;

exports.outracoisa = 'outra coisa';