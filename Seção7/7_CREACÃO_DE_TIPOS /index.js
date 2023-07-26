"use strict";
// generics 
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
// Constaint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = {
    name: "Porta",
    cor: "Branca"
};
const otherProduct = {
    name: "carro",
    cor: "Prata",
    wheels: 4
};
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen = { name: "Bic", wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
// Type parameters 
function gerSomeKey(obj, key) {
    return `A chame ${[key]} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(gerSomeKey(server, "ram"));
function showCharName(obj, name) {
    return ``;
}
