const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Creates an array to store the team employees data as objects
let team = [];

function createTeam(){
    console.log("Let's create  your team. Please answer the questions bellow.");

    inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Let's start with some questions about the manager. What is their name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                }
                else {
                    console.log('Please type an employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is their e-mail address?',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                }
                else {
                    console.log('Please type a valid e-mail.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is their employee ID?',
            validate: managerID => {
                if (managerID) {
                    return true;
                }
                else {
                    console.log('Please type a valid ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNo',
            message: 'What is their office number?',
            validate: managerOfficeNo => {
                if (managerOfficeNo) {
                    return true;
                }
                else {
                    console.log('Please type a office number.');
                    return false;
                }
            }
        }
    ])
        .then(({ managerName, managerEmail, managerID, managerOfficeNo }) => {
            Manager.name = managerName;
            Manager.email = managerEmail;
            Manager.id = managerID;
            Manager.officeNumber = managerOfficeNo;

            // Adds the manager object to the team array
            team.push(Manager);
            console.log(Manager);
            console.log(team);

            whatsNext();
        });
}

function whatsNext() {
    inquirer
        .prompt([
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'next',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team and export the html file']
    }
        ])
        .then(({ next }) => {
            if (next === 'Add an engineer'){
                addEngineer();
                return;
            }
            else if (next === 'Add an intern'){
                addIntern();
                return;
            }
            else 
            exportHTML ();
        })
};

function addEngineer() {
    console.log('Function to add an engineer');
    team.push("Engineer X");
    console.log(team);

    // Call the function to decide what to do next
    whatsNext();
};

function addIntern() {
    console.log('Function to add an intern');
    team.push("Intern Z");
    console.log(team);

    // Call the function to decide what to do next
    whatsNext();
};

function exportHTML(){
    console.log('This function will write the HTML file with the objects from the team array');
};

createTeam();