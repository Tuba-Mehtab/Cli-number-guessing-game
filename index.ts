#! /usr/bin/env node
import inquirer from "inquirer"

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 10 + 1)

const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "plz guess a number between 1 till 10",
    },
]);
console.log(answers)
if (answers.userguessednumber === randomnumber) {
    console.log("Congratulations! you guessed right number.")
}
else {console.log("Ooh! you guessed wrong number.")}