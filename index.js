// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateHTML.js');
const employees = [];

// Create function to write HTML file
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err) {
                reject(err);
                returnl
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// Creates a function that initializes the app
const init = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `managerName`,
            message: `What is the team manager's name?(Required)`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `managerId`,
            message: `What is the team manager's id?(Required)`,
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's id!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `managerEmail`,
            message: `What is the team manager's email?(Required)`,
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's email!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `managerOfficeNum`,
            message: `What is the team manager's office number?(Required)`,
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's office number!`);
                    return false;
                }
            }
        },
        {
            type: `list`,
            name: `extraEmployee`,
            message: `Would you like to add another employee?`,
            choices: ['Add Enginner', 'Add Intern', 'Finish building my team']
        }
    ])
}

// Adds extra employees to the object
const extraEmployee = (teamData) => {
    const newData = {};

    return teamData;
}

init()
  .then(data => {
      employees.push(data);
      console.log(extraEmployee(employees));
  })
