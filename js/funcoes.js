//function hoisting
function falaoi() {
    console.log('oi');
}

falaoi();

//Function expression

const souumdado = function () {
    console.log('sou um dado');
}
souumdado();
//arrow function 


const funcaoArrow = () => {
    console.log('sou uma arrow function');
}

funcaoArrow();

//dentro de um objeto
const obj = {
    falar() {
        console.log('estou flaando');
    }
};

obj.falar();



// parametros na funcao

function funcao(a, b, c) {
    console.log(a, b, c);
}
funcao(1, 2, 3);


function dados({ nome, idade }) {
    console.log({ nome, idade });
}

let obj = { nome: 'mateus', idade: 19 };

dados(obj);


//retorno de funcao

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2));

function criarPessoa(nome, sobrenome) {

    return { nome, sobrenome };
}

const p1 = criarPessoa('mateus', 'amaral');

function falaFrase(comeco) {
    function falaresto(resto) {
        return comeco + ' ' + resto;

    }
    return falaresto;
}

const fala = falaFrase('ola');
const resto = fala('mundo!');
console.log(resto);

function criarMultiplicador(multiplicador) {

    return function (n) {

        return n * multiplicador;
    };

}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));

console.log(quadriplica(2));


//callback

function f1(callback) {
    console.log('f1');

    if (callback) callback();
}

function f2(callback) {
    console.log('f2');
    if (callback) callback();

}

function f3(callback) {
    console.log('f3');
    if (callback) callback();

}
f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('foi');
}
f2();

f3();


console.log('olá mundo')


    //IIFE -> funções imediatas

    (function (idade, peso, altura) {

        const sobrenome = "Amaral";

        function criaNome(nome) {
            return nome + ' ' + sobrenome;
        }

        function falaNome() {
            console.log(criaNome('mateus'));
        }
        falaNome();
        console.log(idade, peso, altura);
    })(19, 75, 1.75);

//funções fábricas

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala(assunto = "falando sobre NADA.") {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,
        //gettere

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    }
}

const p1 = criarPessoa('Mateus', 'Amaral', 1.8, 80);
p1.nomeCompleto = 'Mateus Passos Amaral'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

