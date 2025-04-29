const {add,sub,multi,divide} = require ('./modules/mathfun');
const chalk = require('chalk');
const express = require('express');

const app = express();

console.log(chalk.blue.bold.inverse("Sum of two number is : ", add(4,2)));
console.log(chalk.green.italic.inverse("Subtraction of two number is : " ,sub(4,2)));
console.log(chalk.white.italic.inverse("Multiple of two number is : " ,multi(4,2)));
console.log(chalk.red.bold.inverse("Division of two number is : " ,divide(4,2)));

app.get("/",(req,res)=>{
    res.send("hello From Express :");
});
app.listen(8000,()=>{
    console.log("listing Port 8000");
})