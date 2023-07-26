// generics 

function showData<T>(arg: T):string{
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))

// Constaint em Generics

function showProductName<T extends {name:string}>(obj:T){
  return `O nome do produto é: ${obj.name}`
}

const myObj={
  name:"Porta",
  cor:"Branca"
}
const otherProduct={
  name:"carro",
  cor:"Prata",
  wheels:4
}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

// interfaces com generics

interface MyObeject<T, U> {
  name:string
  wheels: T
  engine: U
}

type Car = MyObeject<number,number>
type Pen = MyObeject<boolean, boolean>

const myCar:Car = {name:"Fusca", wheels:4, engine:1.0}
const myPen:Pen = {name:"Bic", wheels:false, engine:false}

console.log(myCar)
console.log(myPen)

// Type parameters 

function gerSomeKey<T, K extends keyof T>(obj:T, key:K){
  return `A chame ${[key]} esta presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd:"2TB",
  ram:"32GB"
}

console.log(gerSomeKey(server, "ram"))

// keyof Type Operator 
type character = {name:string, age:number, hasDriveLicense:boolean}

type C =  keyof character

function showCharName(obj:character, name:C):string{
  return ``
}