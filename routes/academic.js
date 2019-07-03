var express = require('express');
var router = express.Router();

router.get('/instructors', function (req, res, next) {
  res.render('academic/instructors');
});

router.get('/instructors2', function (req, res, next) {
  res.render('academic/instructors2');
});

router.get('/courses', function (req, res, next) {
  res.render('academic/courses');
});

router.get('/schedules', function (req, res, next) {
  res.render('academic/schedules');
});

module.exports = router;
