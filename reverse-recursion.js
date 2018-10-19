const input = process.argv[2];

function reverseString (str = 'hello world') {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

}

console.log("\nOutput: " + reverseString(input));

// console.log("\nsubstr(1) " + input.substr(1));
//
// console.log("charAt(0) " + input.charAt(0));

// console.log("combined " + input);

module.exports.reverseString = reverseString(input);

