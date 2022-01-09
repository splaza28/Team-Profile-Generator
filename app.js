const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Manager');
const Manager = require('./lib/Intern');
//const util = require('util');
const generateHtml = require('./src/createHtml');
const team = [];

//let rosterComplete = false;

const questions = data => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "roleType",
            message: "What is the employee's role on the team?",
    choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Roster complete"
            ]
        },
        {
            type:"input",
            name: "name",
            message: "What is the employee's name?",
            
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?",
            
        },

        {
            type:"input",
            name:"email",
            message: "What is the employee's email?",
            
        },

        {
            type: "input",
            name: "office",
            message: "Enter the manager's office number:",
            when: manager => {
              if (manager.roleType === "Manager") {
                return true;
              } else {
                return false;
              }
            }
        },

        {
            type: "input",
            name: "github",
            message: "Enter the engineer's github user:",
            when: engineer => {
              if (engineer.roleType === "Engineer") {
                return true;
              } else {
                return false;
              }
            }
        },

        {
            type: "input",
            name: "school",
            message: "Enter the intern's school name:",
            when: intern => {
              if (intern.roleType === "Intern") {
                return true;
              } else {
                return false;
              }
            }
        },

        {
          type: 'confirm',
          name: 'rosterComplete',
          message: 'Would you like to enter another employee?',
          default: true,
      },

    ])
    .then(roster => {
      if (roster.rosterComplete) {
        return questions() ;
      }
      else {
        return console.log('complete!');
      }

    })
}
        
questions();