#! /usr/bin/env node
import inquirer from "inquirer";
console.log("'WELCOME TO NUMBER GUESSING GAME'");
//computer generated number-done
//input number by user-done
//compare-done
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
} else {
  console.log("Your guessed number is incorrect.Guess another number between 1 to 6:");
}
