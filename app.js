const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Manager');
const Manager = require('./lib/Intern');
//const util = require('util');
const generateHtml = require('./src/createHtml');
const team = [];

let rosterComplete = false;

const questions = data => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "roleType",
            message: "What is your role on the team?",
    choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Roster complete"
            ]
        },
        {
            type:"input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the your id?",
            name: "id",
        },

        {
            type:"input",
            message: "What is your email?",
            name:"email",
        },

        {
            type: "input",
            name: "office",
            message: "Enter Manager's office number:",
            
        }
    ])
};

questions();