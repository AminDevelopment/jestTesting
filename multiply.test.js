const multiply = require('./multiply');

test('multiplies 5 * 4 to equal 20', () => {
  expect(multiply(5, 4)).toBe(20);
});