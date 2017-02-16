var express = require('express');
var mysql = require('mysql');
var config = require('../config/config');
var router = express.Router();
var connection = mysql.createConnection({
  host: config.host,
  user: config.userName,
  password: config.password,
  database: config.database
})

connection.connect();

var bcrypt = require('bcrypt-nodejs');

//Test route to test bcrypt
// var hashedPassword = bcrypt.hashSync("x");
// console.log(hashedPassword);
// var checkHash = bcrypt.compareSync("x", hashedPassword);
// console.log(checkHash);

/* GET home page. */
router.get('/', function(req, res, next) {
  const selectQuery = 'SELECT * FROM item';
  connection.query(selectQuery, (error, results, field) => {
    if (error) throw error;
    res.send({ results });
  });
});

router.get('/products/:id', function(req, res, next) {
  const itemId = req.params.id;
  const selectQuery = `SELECT * FROM item WHERE id=${itemId}`;
  connection.query(selectQuery, (error, results, field) => {
    if (error) throw error;
    res.send({ results });
  })
})

router.post('/login', (req, res, next) => {
  // const selectQuery = 'SELECT * FROM user WHERE username = ?';
  // console.log(req.query.username)
  // connection.query(selectQuery,[req.query.username], (error, results, fields) => {
  //   if(results.length === 0){
  //     res.json({msg: 'noAccount'})
  //   }else{
  //     res.json({msg: "loggedIn"})
  //   }
  // })
  var username = req.body.username;
  var password = req.body.password;
  var findUserQuery = "SELECT * FROM user WHERE username = ?";
  connection.query(findUserQuery, [username], (error, results, fields)=>{
    if(error) throw error;
    if(results.length === 0){
      res.json({
        msg: "badUsername"
      })
    }
    else{
      // This is a valid username(we know because reults.length is > 0)
      var checkHash = bcrypt.compareSync(password, results[0].password);
      res.json({
        msg: "foundUser"
      })
    }
  });
});

// Make a register post route
router.post('/register', (req, res, next) => {
  const selectQuery = 'SELECT * FROM user WHERE username = ?';
  connection.query(selectQuery,[req.body.username], (error, results, fields) => {
    console.log(results)
    if(results.length === 0){
      var insertUserQuery = 'INSERT INTO user (name, email, username, password) VALUES' +
        "(?,?,?,?)";
      connection.query(insertUserQuery, [req.body.name, req.body.email, req.body.username, bcrypt.hashSync(req.body.password)], (error, results, field) => {
        res.json({msg: 'userInserted'})
      })
    }else{
      res.json({msg: "userNameTaken"})
    }
  })
});

module.exports = router;
