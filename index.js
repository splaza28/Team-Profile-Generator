const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Manager');
const Manager = require('./lib/Intern');
//const util = require('util');
//const generateHtml = require('./src/generateHtml');
const team = [];


function createTeam() {
    function getManager() {
        inquirer.prompt([
            {
                type:"input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the amanger's id?",
                name: "id",
            },
            {
                type:"input",
                message: "What is the manager's email?",
                name:"email",
            },
            {
                type:"input",
                message:"what is the manager's office number?",
                name:"officeNumber"
            }

         ]).then(respone => {
             const manager = new Manager(response.name, response.id, respone.email, response.officeNumber);
             team.push(manager);
             addToTeam();
         })
    }

    function addToTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "What is your role on the team?",
        choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Roster complete"
         ]
       }     
    ]).then(response => {
        const selectedRole = response.role;
        if (selectedRole === "Manager") {
            getManager();
        }
    });
  };
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err; 
    })
}

// TODO: Create a function to initialize app
function createTeam() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        fs.writeFile("README.md", generateMarkdown(answers), function(err) {
            if (err) throw err;
            else if (console.log("README.md Successfully Created!"));
            });
        
    });
}


createTeam();
