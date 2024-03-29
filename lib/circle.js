const Shape = require('./shape');

class Circle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
  render() {
    // console.log(this.shapeColor);
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
}

module.exports = Circle;
//code from project assets

/* */


// render() {
//   // console.log(this.shapeColor);
//   return `
//     ${this.renderFileInfo()}

//     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

//     ${this.renderTextInfo()}

//     ${this.renderClosingTag()}
//     `;
// }






  //   // console.log(this.shapeColor);
  //   return `
  //     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  //     <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
  
  //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  //     </svg>`
  // }