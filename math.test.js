const { add, multiply } = require('./math');

test('add function adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiply function multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
});
