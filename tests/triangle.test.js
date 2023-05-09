const Shape = require('../lib/shape');
const Triangle = require('../lib/triangle');

// A test to check that the expected HTML code for a triangle with a fill color of red matches
// the HTML code rendered from render()in file 'triangle.js'

describe('Triangle', () => {
  test('should render triangle specific SVG HTML code with fill color', () => {
    const expectedHtml = '<polygon points="150, 18 244, 182 56, 182" fill="red"/>';
    const triangle = new Triangle();
    triangle.shapeColor = ("red")
    expect(triangle.render()).toEqual(expectedHtml);
  });
});