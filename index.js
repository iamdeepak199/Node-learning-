const {add,sub,multi,divide} = require ('./modules/mathfun');
const chalk = require('chalk');

console.log(chalk.blue.bold.inverse("Sum of two number is : ", add(4,2)));
console.log(chalk.green.italic.inverse("Subtraction of two number is : " ,sub(4,2)));
console.log(chalk.white.italic.inverse("Multiple of two number is : " ,multi(4,2)));
console.log(chalk.red.bold.inverse("Division of two number is : " ,divide(4,2)));