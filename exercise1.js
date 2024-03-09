import PromptSync from "prompt-sync"
const prompt = PromptSync()
const name = prompt("Tell me your name: ")

const value = 100
let new_value = 100
const tax = 0.3
let i = 0

while (new_value <= value*3){
    new_value += new_value*tax
    
    i++
}

console.log(`The number of months to achieve your goal is ${i}`)
