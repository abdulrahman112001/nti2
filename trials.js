// const { require } = require("yargs")



// stringFy -- > convert objet to json 
const car = {
    name : 'BMW',
    color : 'Black'
}

const carjson = JSON.stringify(car)
// console.log(carjson)


// pares --> convert json to object 

// const carObject = JSON.parse(carjson)
// console.log(carObject)





// console.log(fs.readFileSync('test.json').toString())

///////////////////////////////////
//task 
/**
 * Task
 * create object person name age
 * change object to json
 * write file json 
 * read file
 * json to object
 * change inside object
 * object --> json
 * write
 */


const person =  {
    name : 'Abdulrahman',
    age:21,
}

const perToJSon = JSON.stringify(person)


const fs =require('fs')

fs.writeFileSync('test.json',perToJSon)
console.log(fs.readFileSync('test.json').toString())

const perToOBj = JSON.parse(perToJSon)
perToOBj.name = 'OMAR'
perToOBj.age =10

const convToJson = JSON.stringify(perToOBj)
// console.log(convToJson)

fs.writeFileSync('test.json',convToJson)

console.log(convToJson)





