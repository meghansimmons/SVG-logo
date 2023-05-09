const Shape = require('../lib/shape');
const Circle = require('../lib/circle');

// A test to check that the expected HTML code for a circle with a fill color of green matches
// the HTML code rendered from render()in file 'circle.js'

describe('Circle', () => {
  test('should render circle specific SVG HTML code with fill color', () => {
    const expectedHtml = '<circle cx="150" cy="100" r="80" fill="green"/>';
    const circle = new Circle();
    circle.shapeColor = ("green")
    expect(circle.render()).toEqual(expectedHtml);
  });
});
