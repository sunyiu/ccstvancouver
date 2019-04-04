var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var qlang = req.query.lang,
    clang = req.cookies.ccstvan_langpref  == 'undefined' ? undefined : req.cookies.ccstvan_langpref,
    lang = qlang || clang;

  if (!lang) {
    res.redirect('/language');
  } else {
    if (qlang && qlang != clang) {
      //set cookie lang
      res = res.cookie('ccstvan_langpref', qlang);
    }
    res.render('index', { title: 'Canadian Chinese School of Theology Vancouver' });
  }
});


router.get('/language', function (req, res, next) {
  res.render('language', { title: 'Canadian Chinese School of Theology Vancouver' });
});

module.exports = router;
