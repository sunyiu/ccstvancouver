var express = require('express');
var router = express.Router();

router.get('/apply', function (req, res, next) {
  res.render('admissions/apply');
});

router.get('/fees', function (req, res, next) {
  res.render('admissions/fees');
});

router.get('/finanical', function (req, res, next) {
  res.render('admissions/finanical');
});

router.get('/international', function (req, res, next) {
  res.render('admissions/international');
});

router.get('/programs', function (req, res, next) {
  res.render('admissions/programs');
});


router.get('/vancouver', function (req, res, next) {
  res.render('admissions/vancouver');
});

module.exports = router;
