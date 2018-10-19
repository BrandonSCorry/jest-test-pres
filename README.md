# Jest Unit-Testing Presentation with Demo

### node command line testing

Google Slides: https://docs.google.com/presentation/d/1i490IM59bIn5GiNJ_zxyuKIJEQIWXYVKgVinVL5lGUE/edit?usp=sharing


##### dependencies: npm, babel-jest, make-runnable
#### devDependencies: jest

#### user guide



`npm install` and then enter `npm run test` on the command line

_sum.spec.js_ tests a simple sum function from _sum.js_ for jest cli demonstration

_sum-array.spec.js_ tests sum of array values from _sum-array.js_ for more jest cli demonstration

_timers.spec.js_ - followed this tutorial https://www.jstwister.com/post/unit-testing-beginners-guide-spying-fake-timers/

-> timer mock info: https://jestjs.io/docs/en/timer-mocks.html

_fizzbuzz.js_ - CLI, takes input into fizzbuzz function and outputs based on input params

you can run `node fizzbuzz.js fizzBuzzCheck` to run the function with the default parameters or
you can input your own parameters:
  e.g. `node fizzbuzz.js fizzBuzzCheck p1 p2 p3 p4` where p1-p4 are your input parameters
    

p1 = length        (the default is 15)

p2 = fizz number   (the default is 3)

p3 = buzz number   (the default is 5)

p4 = index         (the default is 1)

### Example usage : `node fizzbuzz.js checkFizzBuzz 50 4 7 5` 

