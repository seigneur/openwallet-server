var express = require('express');
var router = express.Router();
var paypal = require('../custom-modules/paypal.js');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Wallet' });
});

router.post('/user/auth/paypal', function(req, res) {
   paypal.storeAuth(req,res, function(err,result){
       if(!err)
	   res.send(200);
       else
	   res.send(401);
   });
});


module.exports = router;
