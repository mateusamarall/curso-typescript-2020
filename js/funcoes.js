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
