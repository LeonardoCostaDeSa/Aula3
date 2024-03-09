import PromptSync from "prompt-sync"
const prompt = PromptSync()

/*
let a = "10"

console.log(Number(a))

const b = 10.5
b.toFixed(b)
console.log(b)

let dia = "Segunda"

switch(dia){
    case "Segunda":
        console.log("Começo da semana")
        break
    case "Sexta":
        console.log("Final de semana")
        break
    default:
        console.log("qualquer outro dia da semana")
}

let age = 18
let canDrive = (age >= 18) ? 'The person can drive' : 'The person can not drive'
console.log(canDrive)

const ageGreater = true
const hasPermit = true
const canApply = ageGreater && hasPermit
const candidateRefused =! canApply

console.log(candidateRefused)
*/
const name = prompt("Tell me your name: ")
console.log(`Your name is: ${name}`)
