const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const teamMembers = [];
let teamRoster = "";
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      createTeamMembers();
    });
}

function createTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Which option would you like?",
        choices: ["Create an Engineer", "Create an Intern", "Exit This Now!!"],
      },
    ])
    .then((answer) => {
      if (answer.option === "Create an Engineer") {
        createEngineer();
      } else if (answer.option === "Create an Intern") {
        createIntern();
      } else {
        teamRoster = render(teamMembers);
        createHTML(teamRoster);
      }
    });
}

function createHTML(html) {
  fs.writeFileSync(outputPath, html, "utf-8");
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      createTeamMembers();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      createTeamMembers();
    });
}

start();
