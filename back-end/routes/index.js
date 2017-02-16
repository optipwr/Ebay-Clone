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
var randtoken = require('rand-token')
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
 const selectQuery = 'SELECT * FROM user WHERE username = ?';
 var password = req.body.password
 var username = req.body.username
 connection.query(selectQuery,[username], (error, results, fields) => {
   if(results.length === 0){
     res.json({msg: 'noAccount'})
   }else{
     
     checkHash = bcrypt.compareSync(password, results[0].password);
     // console.log('############')
     // console.log(checkHash)
     // console.log('############')
     if(checkHash == false){
       res.json({msg: "badPassword"});
     }else{
       var token = randtoken.uid(40);
       insertToken = "UPDATE user SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE username=?";
       connection.query(insertToken, [token, username], (error, results)=>{
     console.log('############')
     console.log(token)
     console.log('############')
         res.json({
           msg:'foundUser',
           token: token
         })    
       })
     }
   }
 })
})

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