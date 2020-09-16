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