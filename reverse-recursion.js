var input = process.argv[2];

var reverseInput;

var reverseArr = [];

// function reverse () {
//
//   reverseInput = input.split("").reverse().join("");
//   console.log(reverseInput);
// }

function reverseString (str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  console.log(str.substr(1));
  console.log(str.CharAt(0));

}
// reverse();

console.log(reverseString(input))

console.log("substr(1) " + input.substr(1));



console.log("chatAt(0) "+ input.charAt(0));

