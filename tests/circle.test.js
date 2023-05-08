const Shape = require('../lib/shape');
const Circle = require('../lib/circle');


describe('Circle', () => {
  test('should render circle specific SVG HTML code with fill color', () => {
    const expectedHtml = '<circle cx="150" cy="100" r="80" fill="green"/>';
    const circle = new Circle();
    circle.shapeColor = ("green")
    expect(circle.render()).toEqual(expectedHtml);
  });
});
