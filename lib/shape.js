class Shape {
    constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
    }

    renderFileInfo(){
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    };

    renderTextInfo(){
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };

    renderClosingTag(){
      return `</svg>`
    }
}
    
module.exports = Shape;

