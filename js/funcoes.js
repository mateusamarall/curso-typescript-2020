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


