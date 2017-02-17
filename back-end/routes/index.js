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
	 // console.log('############')
	 // console.log('Wrong username')
	 // console.log('############')     
   }else{
	 
	 checkHash = bcrypt.compareSync(password, results[0].password);
	 if(checkHash == false){
	   res.json({msg: "badPassword"});
	 // console.log('############')
	 // console.log('Wrong Password')
	 // console.log('############')       
	 }else{
	   var token = randtoken.uid(40);
	   insertToken = "UPDATE user SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE username=?";
	   connection.query(insertToken, [token, username], (error, results)=>{
	 // console.log('############')
	 // console.log(token)
	 // console.log('############')
		 res.json({
		   msg:'foundUser',
		   token: token,
		   username: username
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
   // console.log(results)
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


router.get('/account/:username', function(req, res, next) {
 const selectQuery = 'SELECT * FROM user WHERE username = ?';
 connection.query(selectQuery, [req.params.username], (error, results, field) => {
   if (error) throw error;
   res.send({ results });
   // console.log('ACCOUNT PAGEEE')
 }) 
})

router.post('/submitBid/', function(req, res, next) {
 	const selectQuery = 'SELECT current_bid, starting_bid FROM item WHERE id = ?';
 	connection.query(selectQuery, [req.body.auctionItemId], (error, results, field) => {
   		if (error) throw error;
	 	console.log('############')
	 	console.log(results)
	 	console.log('############')
   		if((req.body.bidAmount < results[0].current_bid)
   			||(req.body.bidAmount < results[0].starting_bid)){
   			res.json({ msg: "bidToLow" });
		}else{
			// bid had passed server validation.. its high enough! update
			// update the bid_history table, and the auctions table
			// >> auctions table
			// 	 - high_bider_id
			// 	 - current_bid
			// >> bid_history
			//   - auction_id
			// 	 - bidder_id
			//   - amount
			// update auctions high_bidder_id and bid
			// where auction id = whatever was passed			
			var getUserId = "SELECT id FROM user WHERE token = ?"
			connection.query(getUserId, [req.body.userToken], (error2, results2) => {
				if(results2.length > 0){
					var insertAuctionsQuery = " UPDATE item SET high_bidder_id = ?, current_bid = ? " +
						"WHERE id = ?";
					connection.query(insertAuctionsQuery, [results2[0].id, req.body.bidAmount, req.body.auctionItemid], (error, results, field) => {
						if (error2) throw error2;
						res.json({
							msg:'bidAccepted',
							newBid: req.body.bidAmount
						})						
					})		
				}else{
					res.json({
						msg:'badToken'
					})
				}
			})
		}
 	})
})

// router.post('/submitBid/', function(req, res, next) {
// 	console.log(req.body)
// })

module.exports = router;