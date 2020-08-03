var express = require('express');
var router = express.Router();

var sgMail = require('@sendgrid/mail');
var sgKey = require('../keys/sendGrid');
sgMail.setApiKey(sgKey.apiKey);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register');
});


module.exports = router;