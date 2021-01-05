var express = require('express');
var router = express.Router();

router.get('/theology', function (req, res, next) {
  res.render('events/theology');
});

router.get('/chin06', function (req, res, next) {
  res.render('events/chin06');
});

router.get('/2021Jan_1', function (req, res, next) {
  res.render('events/2021Jan_1');
});

router.get('/inter_student', function (req, res, next) {
  res.render('events/inter_student');
});

module.exports = router;
