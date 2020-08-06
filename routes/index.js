var express = require('express');
var router = express.Router();

var sgMail = require('@sendgrid/mail');
var sgKey = require('../keys/sendGrid');
sgMail.setApiKey(sgKey.apiKey);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* Get student resources page */
router.get('/student-resources', function (req, res, next) {
  res.render('student-resources');
})

router.get('/aboutus', function (req, res, next) {
  res.render('aboutus');
})

router.post('/feedback', function (req, res, next) {
  let from = req.body.from,
      name = req.body.name,
      message = req.body.message;

  var msg = {
      to: 'info@ccstvan.ca',
      from: from,
      subject: 'Message from web page (' + name + ')',
      text: message,
  };

  sgMail.send(msg).then((result) => {
      res.send({'isSuccess': true});
  }).catch((err) => {
      console.log(err);
      res.status(500).send({'isSuccess': false, 'error' : err});
  });
});



module.exports = router;
