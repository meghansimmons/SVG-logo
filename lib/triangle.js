const Shape = require('./shape');

class Triangle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
  render() {
    // console.log(this.shapeColor);
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    }
  }
  
  module.exports = Triangle;
