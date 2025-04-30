/*

<---------------------Create Modules------------------------------>

const {add,sub,multi,divide} = require ('./modules/mathfun');
const chalk = require('chalk');

console.log(chalk.blue.bold.inverse("Sum of two number is : ", add(4,2)));
console.log(chalk.green.italic.inverse("Subtraction of two number is : " ,sub(4,2)));
console.log(chalk.white.italic.inverse("Multiple of two number is : " ,multi(4,2)));
console.log(chalk.red.bold.inverse("Division of two number is : " ,divide(4,2)));

<---------------------Create Server Using Express---------------->

const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("hello From Express :");
});
app.listen(8000,()=>{
    console.log("listing Port 8000");
})

<---------------------Create Server Using Node------------------>

const http = require('http');
// Create a local server to receive data from
const server = http.createServer((req,res)=>{
    res.end("Hello this is server : ");
});
server.listen(8000,()=>{

    console.log("server is running ");
})

<---------------------File System CURD Operation---------------->

const fs = require('fs');
fs.writeFile('data.txt',"Hello this is a File System : in this module we are learn CURD Operations :",(err)=>{
    console.log("File is created");
})

fs.appendFile('data.txt',"\n Hyy this is Append Functions :",(err)=>{
    console.log("Append Function is done : ");
})

fs.mkdir('File_System',(err)=>{
    console.log("Folder is Created : ");
})

fs.rename('data.txt','File_data.txt',(err)=>{
    console.log("Rename of file is Done  :");
})

fs.readFile('File_data.txt','utf-8',(err,data)=>{
    console.log(data);
})

fs.unlink('data.txt',(err)=>{
    console.log("Delete File ");
})

fs.rmdir('File_System',(err)=>{
    console.log("Directory Delete : ");
})
    
<-----------------Synchronous And Asynchronous------------------>

const fs = require('fs');
const data = fs.readFileSync('File_data.txt','utf-8');
console.log(data);
console.log("Today is Awsoesme day :");

fs.readFile('File_data.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log("Hi My name is Deepak : ");

<-----------------Operating System OS Module---------------------->

const os = require('os');
console.log(os.arch());

const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024} GB`);

const totalmemoery = os.totalmem();
console.log(`${totalmemoery/1024/1024/1024} GB`);

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.homedir());
console.log(os.availableParallelism());
console.log(os.cpus());
console.log(os.getPriority());
console.log(os.version());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.release());

<-------------------Path Module---------------------->

const path = require('path');
console.log(path.parse("C:\Users\pc\OneDrive\Desktop\Node.js Learning\modules\mathfun.js"));

console.log(path.basename("C:\Users\pc\OneDrive\Desktop\Node.js Learning\modules\mathfun.js"));

console.log(path.extname("C:\Users\pc\OneDrive\Desktop\Node.js Learning\modules\mathfun.js"));

console.log(path.dirname("C:\Users\pc\OneDrive\Desktop\Node.js Learning\modules\mathfun.js"));

const mypath = path.parse("C:\Users\pc\OneDrive\Desktop\Node.js Learning\modules\mathfun.js");
console.log(mypath.name);

<-------------------Chalk Module---------------------->

const chalk = require('chalk');
console.log(chalk.blue.inverse.italic("This is a chalk module which help to identify error and message easly on console :"));

<---------------------Validator---------------------->

const validator = require('validator');

const res = validator.isDate("2023-12-10"); 
console.log(res);


const Email = validator.isEmail("deepak@gmail.com"); 
console.log(Email);

const equal = validator.equals("deepak@gmail.com", "deepak@gmail.com");
console.log(equal);

const black = validator.blacklist("deepak@gmail.com","deepak");
console.log(black);

<---------------------Database Connection---------------------->*/

const db = require('./Database/database');