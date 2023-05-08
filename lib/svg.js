// //code from project assets combined with ansers to questions
const Shape = require('./shape');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

var string = "";

function createDocument(answers) {
    const shape = new Shape(answers.shape_color, answers.text_color, answers.logo_text);
    const circle = new Circle(answers.shape_color, answers.text_color, answers.logo_text).render();
    const triangle = new Triangle(answers.shape_color, answers.text_color, answers.logo_text).render();
    const square = new Square(answers.shape_color, answers.text_color, answers.logo_text).render();
    

    if(answers.shape == 'circle') {
        string = circle;
    } else if (answers.shape == 'triangle') {
        string = triangle;
    } else {
        string = square;
    }

    return `
        ${string}
    `;
}
module.exports = {createDocument};
