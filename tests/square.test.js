const Shape = require('../lib/shape');
const Square = require('../lib/square');

// A test to check that the expected HTML code for a square with a fill color of blue matches
// the HTML code rendered from render()in file 'square.js'

describe('Square', () => {
  test('should render square specific SVG HTML code with fill color', () => {
    const expectedHtml = '<rect x="90" cy="100" y="40" width="120" height="120" fill="blue"/>';
    const square = new Square();
    square.shapeColor = ("blue")
    expect(square.render()).toEqual(expectedHtml);
  });
});