const inquirer = require('inquirer');

// Imports the objects from the lib folder
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Creates an array to store the team employees data as objects
let team = [];

// Imports the HTML structure from the page template
const generatePage = require('./src/page-template.js');

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
            let manager = new Manager(managerName, managerEmail, managerID, managerOfficeNo);

            // Adds the manager object to the team array
            team.push(manager);

            whatsNext();
        });
}

function whatsNext() {
    inquirer.prompt([
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
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Ok. Let's add an engineer to the team. What is their name?",
                validate: engineerName => {
                    if (engineerName) {
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
                name: 'engineerEmail',
                message: 'What is their e-mail address?',
                validate: engineerEmail => {
                    if (engineerEmail) {
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
                name: 'engineerID',
                message: 'What is their employee ID?',
                validate: engineerID => {
                    if (engineerID) {
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
                name: 'engineerGithub',
                message: 'What is their github username?',
                validate: engineerGithub => {
                    if (engineerGithub) {
                        return true;
                    }
                    else {
                        console.log('Please type a valid username.');
                        return false;
                    }
                }
            }
        ])
        .then(({ engineerName, engineerEmail, engineerID, engineerGithub }) => {
            let engineer = new Engineer(engineerName, engineerEmail, engineerID, engineerGithub);

            // Adds the manager object to the team array
            team.push(engineer);

            whatsNext();
        });
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Ok. Let's add an engineer to the team. What is their name?",
                validate: internName => {
                    if (internName) {
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
                name: 'internEmail',
                message: 'What is their e-mail address?',
                validate: internEmail => {
                    if (internEmail) {
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
                name: 'internID',
                message: 'What is their employee ID?',
                validate: internID => {
                    if (internID) {
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
                name: 'internSchool',
                message: 'What is their school?',
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    }
                    else {
                        console.log('Please type a valid school name.');
                        return false;
                    }
                }
            }
        ])
        .then(({ internName, internEmail, internID, internSchool }) => {
            let intern = new Intern(internName, internEmail, internID, internSchool);

            // Adds the intern object to the team array
            team.push(intern);

            whatsNext();
        });
};

function exportHTML(){
    console.log('This function will write the HTML file with the objects from the team array');
    generatePage(team)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
};

createTeam();