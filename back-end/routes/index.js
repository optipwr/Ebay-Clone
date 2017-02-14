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

module.exports = router;
