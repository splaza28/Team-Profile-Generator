const inquirer = require('inquirer');
const fs = require('fs');

//Team files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Manager');
const Manager = require('./lib/Intern')

//Array for roles
const engineers = [];
const interns = [];
const managers = [];

