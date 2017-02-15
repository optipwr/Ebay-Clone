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

router.get('/login', (req, res, next) => {
  const selectQuery = 'SELECT * FROM user WHERE username = ?';
  console.log(req.query.username)
  connection.query(selectQuery,[req.query.username], (error, results, fields) => {
    if(results.length === 0){
      res.json({msg: 'noAccount'})
    }else{
      res.json({msg: "loggedIn"})
    }
  })
})

// Make a register post route
router.post('/register', (req, res, next) => {
  const selectQuery = 'SELECT * FROM user WHERE username = ?';
  connection.query(selectQuery,[req.body.username], (error, results, fields) => {
    console.log(results)
    if(results.length === 0){
      var insertUserQuery = 'INSERT INTO user (username, password) VALUES' +
        "(?,?)";
      connection.query(insertUserQuery, [req.body.username, req.body.password], (error, results, field) => {
        res.json({msg: 'userInserted'})
      })
    }else{
      res.json({msg: "userNameTaken"})
    }
  })
});

module.exports = router;
