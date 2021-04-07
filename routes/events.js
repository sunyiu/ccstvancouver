var express = require('express');
var router = express.Router();

router.get('/theology', function (req, res, next) {
  res.render('events/theology');
});

router.get('/dipcs', function (req, res, next) {
  res.render('events/dipcs');
});

router.get('/etc', function (req, res, next) {
  res.render('events/etc');
});

router.get('/etc2', function (req, res, next) {
  res.render('events/etc2');
});

router.get('/admin-info', function (req, res, next) {
  res.render('events/admin-info');
});


module.exports = router;
