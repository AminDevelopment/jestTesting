const subtract = require('./subtract');

test('subtracts 5 - 4 to equal 1', () => {
  expect(subtract(5, 4)).toBe(1);
});