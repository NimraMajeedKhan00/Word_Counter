#!/usr/bin/env node
//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("'\n\tWORD_COUNTER\n"))
//prompt the user to enter a sentence
const answers :{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.blue("Enter your sentence to count the words: ")
    }
])
const words = answers.sentence.trim().split(" ");
console.log(words);


console.log(chalk.yellow(`Your sentence word count is: ${chalk.blue.bold(words.length)}`));
