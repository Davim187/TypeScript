"use strict";
// Tipos de objetos para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "camisa",
    price: 14.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = { email: "davi12@gmail.com", role: "Admin" };
const u2 = { email: "davi1222@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const davi = {
    name: "Davi",
    age: 18
};
console.log(davi);
const goku = {
    name: "Goku",
    age: 50,
    superpowes: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowes[0]);
const arnold = {
    name: "arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// ReadOnlyArray
let myArray = ["Maçã", "Uva", "Pera"];
// myArray[3] = "mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta:" + item);
});
const MyArrayNumber = [1, 2, 3, 4, 5];
console.log(MyArrayNumber);
const anotherUser = ["Davi", 18];
console.log(anotherUser);
// tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 12
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 9]);
