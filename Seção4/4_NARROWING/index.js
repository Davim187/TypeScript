"use strict";
// type guard 
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        console.log(parseFloat(a) + b);
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        console.log(a + parseFloat(b));
    }
}
sum("8", "25");
sum(8, 59);
sum('10', 89);
sum(7, '38');
// Checando se o valor existe 
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
        else if (operation === "subtraction") {
            const subtraction = arr.reduce((i, total) => i - total);
            console.log(subtraction);
        }
        else if (operation === "division") {
            const division = arr.reduce((i, total) => i - total);
            console.log(division);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
operations([8, 2, 4], "sum");
operations([14, 2], "sum");
operations([1, 3, 5], "multiply");
operations([8, 0, 1], "subtraction");
operations([7, 2, 8], "division");
// instance of 
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("jhon");
const paul = new SuperUser("paul");
console.log(jhon);
console.log(paul);
function UserGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`olá super usuario ${user.name} `);
    }
    else if (user instanceof User) {
        console.log(`olá usuario ${user.name} `);
    }
}
UserGreeting(paul);
UserGreeting(jhon);
// Operador in 
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
console.log(turca);
console.log(bob);
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro e da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro e SRD`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
