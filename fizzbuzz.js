//es6 fizzbuzz
const fizzBuzzCheck = (length=100,fizzNum=3,buzzNum=5, i=1) => {
    return new Promise((resolve, reject) => {
      let resultStr;

      for(i;i<=length;i++){

        resultStr = '';

        const fizz = i % fizzNum === 0;

        const buzz = i % buzzNum === 0;

        const evalFizzBuzz = () => fizz && buzz? resultStr = 'FizzBuzz' : fizz? resultStr = 'Fizz' : buzz? resultStr = 'Buzz' : resultStr = parseInt(i);
        console.log(resultStr);
        evalFizzBuzz;
      }
    })

};

module.exports.fizzBuzzCheck = fizzBuzzCheck;



