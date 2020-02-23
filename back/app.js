// const fs = require('fs');
const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'app'
});  
connection.connect();

/*app.use('*', (req, res) => {
  const content = fs.readFileSync('index.html');
  const str = content.toString();
  console.log('content is', content.toString());
  res.setHeader('cache-control', 'no-cache');
  res.send(content.toString());
});*/

app.get('/categories', (req, res) => {
  connection.query('SELECT id, name from category', (error, results) => {
    if (error) throw error;
    res.setHeader('access-control-allow-origin', '*');
    // res.setHeader('', '');
    res.json(results);
  });
});

app.listen(7777);

