import PromptSync from "prompt-sync";
const prompt = PromptSync()
const number_requested = Number(prompt("What number do you want to see the multiplication table: "))
let result = 0

for (let i=0;i<=10;i++){
    result = number_requested*i
    console.log(`${number_requested}X${i}=${result}`)    
} 
