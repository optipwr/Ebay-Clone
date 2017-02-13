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
  res.send({
    message: 'home, muhahaha'
  })
});

module.exports = router;
