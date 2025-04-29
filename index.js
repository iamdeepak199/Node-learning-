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
<-----------------Synchronous And Asynchronous------------------>
<---------------------File System CURD Operation---------------->*/

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














