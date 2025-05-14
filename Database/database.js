const chalk = require('chalk');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,                          
    database: process.env.DB_NAME
});

// Check MySQL connection
db.connect((err) => {
    if (err) {
      console.log('Error connecting to the database:', err);
      return;
    }
    console.log(chalk.green.italic.inverse('Connected to the MySQL database.'));
  });

  module.exports = db ;