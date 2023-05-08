const Shape = require('../lib/shape');
const Triangle = require('../lib/triangle');


describe('Triangle', () => {
  test('should render triangle specific SVG HTML code with fill color', () => {
    const expectedHtml = '<polygon points="150, 18 244, 182 56, 182" fill="red"/>';
    const triangle = new Triangle();
    triangle.shapeColor = ("red")
    expect(triangle.render()).toEqual(expectedHtml);
  });
});