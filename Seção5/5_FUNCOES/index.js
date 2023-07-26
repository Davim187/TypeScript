"use strict";
// void 
function winthouReturn() {
    console.log("Esta função nao tem retorno ");
    // return 1
}
// callback com argumento
function greeting(name) {
    return `Ola, ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Davi");
// Generic Functions
function firstElement(arr) {
    return arr[1];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObeject = mergeObjects({ name: "Davi" }, { age: 18, job: "programmer" });
console.log(newObeject);
// contraints 
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else
        (biggest = b);
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('50', '77'));
// Expercificar tipos de argumentos 
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 8]));
console.log(mergeArrays([1, 2, 3], ["Davi", "Morais"]));
// Parametros opcionais 
function modernGreeting(name, greet) {
    if (greet) {
        return ` Ola, ${greet} ${name}, tudo bem?`;
    }
    return ` Olá, ${name}, tudo bem?`;
}
console.log(modernGreeting('Pedro', 'Dr.'));
// parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(14, 2));
// tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(2);
// Tipo never 
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("algum Error!")
// Rest Parameters 
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2536, 45));
// Destructuring em parametros
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "camisa", price: 49.99 };
console.log(showProductDetails(shirt));
