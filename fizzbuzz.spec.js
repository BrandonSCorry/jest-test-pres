const fzbz = [
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz' ];

const fizzbuzz = require('./fizzbuzz.js');

describe('fizzbuzz suite', () => {


  test('function exists', async () => {
    expect.assertions(1);
    await expect(fizzbuzz.fizzBuzzCheck()).resolves.toBeDefined();
  });

  test('run fizzbuzz to num 15', async () => {
    expect.assertions(1);
    await expect(fizzbuzz.fizzBuzzCheck(1,15)).resolves.toEqual(fzbz);
  });
});