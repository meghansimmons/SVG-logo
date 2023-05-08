// Import the Shape class.

const Shape = require('../lib/shape');

//Describe a testing suite for checking the functionality of the Validate class.

describe('Shape', () => {
  // Write a test that asserts that isPassword() returns false when passed an empty string.

  describe('invalid', () => {
    test('should render first line of the file information', () => {
      const str = '';

      const result = new Validate().isPassword(str);

      expect(result).toEqual(false);
    });
  });
});



const Header = require('../lib/header.js');
const { formatDate } = require('../lib/date.js');

describe('Header', () => {
  test('should render header with the date', () => {
    const expectedHtml = [
      '<header class="header">',
      '<h1>Todo Today</h1>',
      `<p>${formatDate(new Date())}</p>`,
      '</header>',
    ].join('');
    const header = new Header();
    expect(header.render()).toEqual(expectedHtml);
  });
});
