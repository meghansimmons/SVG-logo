# SVG Logo Maker

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This application generates a logo with user input and saves it as a SVG file. The application prompts the user for information about shape, color and text to be used for the logo. 

Three examples of logos depicting each shape with various characteristics are available in the examples folder of the repository. 

A video walk-thru of the creation of a sample logo.svg file can be found through this link - [video of sample logo.svg](https://drive.google.com/file/d/1evUN-WpzQge-r13iHQ1beluBNxzlbHD1/view). Please see the following screenshots of the terminal prompts as well as the generated logo.svg file.

## Installation

This application requires Node.JS to be installed. The user should then run ```npm install``` in their terminal to load the Inquirer npm package(version 8.2.4). 

## Usage
To begin, run the following command in the terminal to invoke the application.

```node index.js```

The application prompts the user to enter text for their logo along with the text color. Next the user must choose a shape from three pre-determined  shapes - circle, triangle or square. Lastly, the user inputs a color for the shape. After all questions have been answered, a file named logo.svg will be generated and saved into the project's root directory.


## Credits
Information on .SVG shape property attributes was given either in demos, as examples or in sample code. Other information about the generation of .SVG files was found at https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial.

Sample code on how to use 'validate' in Inquirer to limit the number of characters entered at the command line was found in an article titled 'A step-by-step guide to using Inquirer.js for creating a CLI app in Node.js' at this site https://geshan.com.np/blog/2023/03/inquirer-js/.

Sample code and logic from a unit mini-project were also useful in writing the code for this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Questions
For any further information about this application or questions you might have, please visit my GitHub profile
[meghansimmons](https://github.com/meghansimmons/SVG-logo).