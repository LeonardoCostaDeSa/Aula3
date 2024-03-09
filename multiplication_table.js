//We start importing the PromptSync library to create an typeable input to the user:
import PromptSync from "prompt-sync";
//Then, we've declared the system variables:
const prompt = PromptSync()
const number_requested = Number(prompt("What number do you want to see the multiplication table: "))
let result = 0
//Repeat loop to print in the screen the multiplication table:
for (let i=0;i<=10;i++){
    result = number_requested*i
    console.log(`${number_requested}X${i}=${result}`)    
} 
//The end