const Shape = require('../lib/shape');

// A testing suite for 'Shape' is created.
  
// A test to check that the expected HTML code for the file information matches
// the HTML code rendered from renderFileInfo()in file 'shape.js'
  describe('renderFileInfo()', () => {
  test('should render render a line of HTML code', () => {
    const expectedHtml = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    const fileInfo = new Shape().renderFileInfo();
    expect(fileInfo).toEqual(expectedHtml);

  });
});


  // A test to check that the expected HTML code for the text information matches
  // the HTML code rendered from renderTextInfo()in file 'shape.js'
  describe('renderTextInfo()', () => {
    test('should render text with color', () => {
      const expectedHtml = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SVG</text>';
      const shapeColor = "yellow";
      const textColor = "purple";
      const text = "SVG";
      const textInfo = new Shape(shapeColor,textColor, text).renderTextInfo();
 
      expect(textInfo).toEqual(expectedHtml);
    });
  });


  // A test to check that the expected HTML closing svg tag matches
  // the HTML code rendered from renderClosingTag()in file 'shape.js'
  describe('renderClosingTag()', () => {
    test('should render an svg closing tag', () => {
      const expectedHtml = '</svg>';
      const closingTag = new Shape().renderClosingTag();
      expect(closingTag).toEqual(expectedHtml);
    });
  });
