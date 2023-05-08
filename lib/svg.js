// //code from project assets combined with ansers to questions
const Shape = require('./shape');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');


function createDocument(answers) {
    // console.log("got to the svg file!");
    const shape = new Shape(answers.shape_color, answers.text_color, answers.logo_text);
    const circle = new Circle(answers.shape_color, answers.text_color, answers.logo_text).render();
    const triangle = new Triangle(answers.shape_color, answers.text_color, answers.logo_text).render();
    const square = new Square(answers.shape_color, answers.text_color, answers.logo_text).render();
    

    if(answers.shape == 'circle') {
        console.log("circle");
    } else if (answers.shape == 'triangle') {
        console.log("triangle");
    } else {
        console.log("square");
    }

    return `
        ${triangle}
    `;
}
module.exports = {createDocument};
