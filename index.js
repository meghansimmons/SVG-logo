// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const {createDocument} = require('./lib/svg');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logo_text',
      message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },

    {
      type: 'input',
      name: 'text_color',
      message: 'Enter a text color',
    },

    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo',
      choices: ['circle', 'square', 'triangle'],
    },

    {
      type: 'input',
      name: 'shape_color',
      message: 'Enter a shape color'
    },
])
.then((answers) => {
  const svgData = createDocument(answers);
  fs.writeFile('logo.svg', svgData, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
  );
});
