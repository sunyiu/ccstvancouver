var express = require('express');
var router = express.Router();

var languageChecker = (req, res, next) => {
  var query = req.query.lang,
    cookie = req.cookies.ccstvan_langpref == 'undefined' ? undefined : req.cookies.ccstvan_langpref,
    lang = query || cookie;

  //console.log('test 0 ' +  req.i18n.__('Title') );

  if (!lang) {
    res.redirect('/language');
  } else {
    if (query && query != cookie) {
      //set cookie lang
      res = res.cookie('ccstvan_langpref', query);
    }
    next();
  }
}

/* GET home page. */
router.get('/', languageChecker, function (req, res, next) {

  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/?lang=zh'
    : '/?lang=en';

  res.render('index', {
    otherLocaleRef: otherLocaleRef
  });
});

router.get('/admissions-vancouver', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-vancouver?lang=zh'
    : '/admissions-vancouver?lang=en';

  res.render('admissions-vancouver', { otherLocaleRef: otherLocaleRef });
})



router.get('/language', function (req, res, next) {
  res.render('language', { title: "Canadian Chinese School of Theology" });
});



module.exports = router;
