const fizzy = require('./fizzbuzz.js');


describe('fizzbuzz suite', function() {
  test('function is defined', () => {
    expect(fizzy).toBeDefined();
  });
});