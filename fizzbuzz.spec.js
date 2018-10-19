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

describe('fizzbuzz suite', async () => {


  test('function exists', async () => {
    expect.assertions(1);
    const data = await
    expect(fizzbuzz).toBeDefined();
  });

  test('run fizzbuzz to num 15', async () => {
    const fizzBuzz15 = await fizzbuzz.fizzBuzzCheck(1,15);
    expect(fizzBuzz15).toEqual(fzbz);
  });
});