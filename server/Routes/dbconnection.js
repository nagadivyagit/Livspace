const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mavusai@24',
    database: 'projectdatabase'
  });
 
  console.log('...........') 
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }

console.log('Connected to database!');
  });

 
  module.exports = connection;