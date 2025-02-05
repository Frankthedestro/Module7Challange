// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js"
import Choices from 'inquirer/lib/objects/choices.js';
// TODO: Create an array of questions for user input
//create questions for title!, Description!, Table of Contents!, Installation, Usage
//License, Contributing, Tests, and Questions
const questions = [ {
          type: 'imput',
          message: 'title of my project.',
          name: 'title',
        },
        {
          type:'imput',
          message:'Please enter a description for the application.',
          name:'des',
        },
        {
          type:'imput',
          message:'Please enter an install guide for the application.',
          name:'install',
        },
        {
          type:'imput',
          message:'Please enter a usage guide for the application.',
          name:'usage',
        }, 
        {
          type:'imput',
          message:'Please enter test guides for the application.',
          name:'tests',
        },
        {
          type:'list',
          message:'You got a licinse for that thing?',
          choices: ['MIT', 'Apache 2.0', 'ISC',],
          name:'license',
        },
        {
          type:'imput',
          message:'contribution guidelines',
          name:'contributing',
        },
        {
          type:'imput',
          message:'Whats your Name for those who have questions?',
          name:'githubName',
        },
        {
          type:'imput',
          message:'Whats your email for those who have questions?',
          name:'email',  
        }
        ,];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README Has Been Made!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
