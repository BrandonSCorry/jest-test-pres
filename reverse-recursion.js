var input = process.argv[2];


function reverseString (str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

}


console.log(reverseString(input))

console.log("substr(1) " + input.substr(1));

console.log("charAt(0) "+ input.charAt(0));

