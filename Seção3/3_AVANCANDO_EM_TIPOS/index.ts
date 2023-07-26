// array number
let number:number[] = [1,2,3]

number.push(5)
console.log(number[1])

// array string
const names: string[] = ["Matheus", "João"]
console.log(names)
names.push('Davi')

// outra sintaxe

const numbers: Array<number> = [1,2,3,4,5]
console.log(numbers)


// any

const arrAny: any = [1, true, false, 'teste', [], {name:'davi'}]
console.log(arrAny)

// parametros tipados

function soma(a:number, b:number){
  console.log(a + b)
}

soma(1,2)

// retorno de função 

function greeting(name:string):string{
  return `Olá ${name}`
}
console.log(greeting('Davi'))

// funçoes anonimas 

// setTimeout(function(){
//   const sallary:number = 1000
//   // console.log(parseFloat(sallary))
//   console.log(sallary )
// }, 2000)

// tipos de objetos
function passCoordinates(coord:{x:number, y:number}){
  console.log("X coordenadas: " + coord.x)
  console.log("X coordenadas: " + coord.y)
}
const objCorrd = {x:329, y:84.2}
passCoordinates(objCorrd)

// propriedades opcionais 
function showNumbers(a:number, b:number, c?:number){
 console.log("A" + a)
 console.log("B" + b)
//  console.log("C" + c)
if(c){
 console.log("C" + c)
}

}
showNumbers(1,2,3)
showNumbers(1,3)

// validar propriedades opcionais

function propsAdvance(fistName:string, lastName?:string){  
  if(lastName !== undefined){
    return `Olá, ${fistName} ${lastName}, tude bem?`
  }  
  return `Olá, ${fistName}, tude bem?`
}
console.log(propsAdvance("Davi", "Morais"))
console.log(propsAdvance("Francisco"))

// union types

function showBalance(balance: string|number){
  console.log(`o saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("200") 

// avançando em union types 
function showUserRole(role:boolean | string){
  if(typeof role === "boolean"){
    return "usuario Aprovado "
  }
  return ` a função do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// type alias 
 type ID = string| number
 type NAME = string| number

function showId(id: ID){
  console.log(`O ID é ${id}`)
}
function showName(name: NAME ){
  console.log(`O ID é ${name}`)
}
showId(1)
showId("200")
showName("Davi")

// introdução de interfaces 

 interface Point {
  x:number,
  y:number,
  z:number,
}
function ShowCoords(obj:Point){
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z} `)
}
const coordObj:Point = {
  x:10,
  y:5,
  z:1
}
ShowCoords(coordObj)

interface Users {
  name:string
  senha:number
}

function ActionUsers(user:Users){
  console.log(`Usuario:${user.name} senha:${user.senha}`)
}

const infoUsers:Users ={
  name:"Davi",
  senha:123456
}

ActionUsers(infoUsers)

// type alias X interfaces
interface Person{
  name:string
}
interface Person{
  age:number
}
const somePerson: Person = {name:"Davi", age:18}

console.log(somePerson)

type personType ={
  name:string
}

// literal types 
let test: "testando"
 
function showDirection(direction: "left" | "right" | "center"){
  console.log(`A direção é: ${direction}`)
}

showDirection("left")

// not null assertion operators

const p = document.getElementById("some-p")
// console.log(p!.innerText)

// Bigint
let n:bigint

n = 1000n
console.log(n)
console.log(typeof n)

// Symbol

let symbolA = Symbol("a")
let symbolB:symbol = Symbol("a")

console.log(symbolA === symbolB)



