
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // change the host to the server's IP address
  user: 'khush',
  password: 'password',
  database: 'mydb'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/Ssignup.html', (req, res) => {
  res.sendFile(__dirname + '/Ssignup.html');
});

app.post('/Ssignup.html', (req, res) => {
  let usertype = req.body.usertype;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;

  connection.query('INSERT INTO signup VALUES("' + usertype + '","' + firstname + '","' + lastname + '","' + email + '","' + password + '");', (err, results) => {
    if (err) throw err;
    else {
      console.log(results);
      console.log("inserted successfully.");
      // res.redirect('');
    }
  });

  connection.end();
});

// const port = 5500;

// app.listen(port, '192.168.0.10', () => console.log(`This app is listening on port ${port} on server '192.168.0.10'`));

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
