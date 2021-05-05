var express = require('express');
var router = express.Router();

router.get('/theology', function (req, res, next) {
  res.render('events/theology');
});

router.get('/dipcs', function (req, res, next) {
  res.render('events/dipcs');
});

router.get('/admin-info', function (req, res, next) {
  res.render('events/admin-info');
});

router.get('/etc-1', function (req, res, next) {
  res.render('events/etc');
});

router.get('/etc-2', function (req, res, next) {
  res.render('events/etc2');
});


module.exports = router;
