// Tipos de objetos para função com interface

interface Product {
  name:string
  price:number
  isAvailable:true
}

function showProductDetails(product:Product){
 console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
 if(product.isAvailable){
  console.log("O produto está disponivel")
 } 
}

const shirt:Product = {
  name:"camisa",
  price:14.99,
  isAvailable:true
}

showProductDetails(shirt)

// propriedades opcional em interdace 

interface User {
  email:string
  role?:string
}

function showUserDetails(user:User){
  console.log(`O usuario tem o email: ${user.email}`)

  if(user.role){
    console.log(`A função do usuario é: ${user.role}`)
  }
}

const u1:User = {email:"davi12@gmail.com", role:"Admin"}
const u2:User = {email:"davi1222@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// Propriedades readonly 

interface Car {
  brand:string
  readonly wheels:number
}

const fusca:Car ={
  brand:"VW",
  wheels:4
}

console.log(fusca)

// index signature

interface CoordObject{
  [index:string]:number
}

let coords:CoordObject ={
  x:10
}

coords.y =15

console.log(coords)

// Herança de interfaces 

interface Human {
  name :string
  age:number
}
interface SuperHuman extends Human {
  superpowes:string[]
}

const davi:Human ={
  name:"Davi",
  age: 18
}

console.log(davi)

const goku:SuperHuman ={
  name:"Goku",
  age:50, 
  superpowes:["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowes[0])

// intersection types

interface Character {
  name:string
}

interface Gum {
  type:string 
  caliber:number
}

type humanWithGun = Character & Gum 

const arnold: humanWithGun = {
  name:"arnold",
  type:"Shotgun",
  caliber:12
}

console.log(arnold)

// ReadOnlyArray

 let myArray:ReadonlyArray<string> = ["Maçã", "Uva", "Pera"]

  // myArray[3] = "mamão"

 console.log(myArray)

 myArray.forEach((item) =>{
  console.log("Fruta:" + item)
 })
 
 // Tuplas
 type fiveNumbers = [number,number,number,number,number]

 const MyArrayNumber: fiveNumbers = [1,2,3,4,5]
 
 console.log(MyArrayNumber)

 type nameAndAge = [string, number ]

 const anotherUser:nameAndAge = ["Davi", 18]

 console.log(anotherUser)

 // tuplas com readonly

 function showNumbers(numbers:readonly[number, number]){
  // numbers[0] = 12
  console.log(numbers[0])
  console.log(numbers[1])
 }

 showNumbers([2,9])
