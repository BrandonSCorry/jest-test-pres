//a,b reduce method
//replace 'add' variable in reduce method, with process.argv[2] in node to allow input / calc functionality

const numArr = [50, 5, 25, 20];

const add = (a, b) => a + b;

const sum = numArr.reduce(add);

module.exports.sum = sum;
