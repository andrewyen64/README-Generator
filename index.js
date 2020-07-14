const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "What is the title of your project?",
    "Enter the description for your project.",
    "Enter the installation instructions.",
    "Enter usage information.",
    "Enter the contribution guidelines.",
    "Enter instructions for testing.",
    "Enter your Github username.",
    "Enter your email.",
    "Choose a license for your project.",
    "Enter the year for the license info.",
    "Enter your full name included in the license."
];

function promptUser() {
    return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0]
    },
    {
      type: "input",
      name: "description",
      message: questions[1]
    },
    {
      type: "input",
      name: "installation",
      message: questions[2]
    },
    {
      type: "input",
      name: "usage",
      message: questions[3]
    },
    {
      type: "input",
      name: "contributing",
      message: questions[4]
    },
    {
      type: "input",
      name: "tests",
      message: questions[5]
    },
    {
      type: "input",
      name: "github",
      message: questions[6]
    },
    {
      type: "input",
      name: "email",
      message: questions[7]
    },
    {
      type: "list",
      name: "license",
      message: questions[8],
      choices: ["Apache", "GNU", "MIT"]
    },
    {
      type: "input",
      name: "year",
      message: questions[9]
    },
    {
      type: "input",
      name: "fullName",
      message: questions[10]
    }
    ]);
  }


// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            return console.log(err);            
        }
        console.log("Successfully generated README file!");        
    })
}

// function to initialize program
function init() {
    promptUser(questions).then(function(data){
        console.log(data);
        writeToFile("README_EX.md", generateMarkdown(data))
    })
}

// function call to initialize program
init();