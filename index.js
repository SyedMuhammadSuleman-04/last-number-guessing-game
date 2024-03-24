#! /usr/bin/env node
import inquirer from "inquirer";
//computer generated number-
//input number by user-done
//compare
const randomNumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Guess any number between 1 to 6:",
    },
]);
if (answer.guessNumber === randomNumber) {
    console.log("Congratulation! Your guessed number is correct.");
}
else {
    console.log("Your guessed number is incorrect.");
}
