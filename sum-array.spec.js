const sumArr = require('./sum-array.js');


describe('sum-array suite', function() {
  test('function is defined', () => {
    expect(sumArr).toBeDefined();
  });
  test('sum array should equal 100', () => {
    expect(sumArr.sum).toEqual(100);
  });
});