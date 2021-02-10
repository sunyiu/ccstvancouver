var express = require('express');
var router = express.Router();

router.get('/theology', function (req, res, next) {
  res.render('events/theology');
});

router.get('/2020_year_end', function (req, res, next) {
  res.render('events/2020_year_end');
});

router.get('/mar22', function (req, res, next) {
  res.render('events/mar22');
});

router.get('/blm', function (req, res, next) {
  res.render('events/blm');
});

router.get('/hist31', function (req, res, next) {
  res.render('events/hist31');
});


module.exports = router;
