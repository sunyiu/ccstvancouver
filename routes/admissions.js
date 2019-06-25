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
// router.get('/', languageChecker, function (req, res, next) {

//   let otherLocaleRef = req.i18n.getLocale() == 'en'
//     ? '/?lang=zh'
//     : '/?lang=en';

//   res.render('admissions/index', {
//     otherLocaleRef: otherLocaleRef
//   });
// });


router.get('/apply', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/apply?lang=zh'
    : '/admissions/apply?lang=en';

  res.render('admissions/apply', {
    otherLocaleRef: otherLocaleRef
  });
});

router.get('/fees', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/fees?lang=zh'
    : '/admissions/fees?lang=en';

  res.render('admissions/fees', {
    otherLocaleRef: otherLocaleRef
  });
});

router.get('/finanical', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/finanical?lang=zh'
    : '/admissions/finanical?lang=en';

  res.render('admissions/finanical', {
    otherLocaleRef: otherLocaleRef
  });
});

router.get('/international', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/international?lang=zh'
    : '/admissions/international?lang=en';

  res.render('admissions/international', {
    otherLocaleRef: otherLocaleRef
  });
});

router.get('/programs', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/programs?lang=zh'
    : '/admissions/programs?lang=en';

  res.render('admissions/programs', {
    otherLocaleRef: otherLocaleRef
  });
});


router.get('/vancouver', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions/vancouver?lang=zh'
    : '/admissions/vancouver?lang=en';

  res.render('admissions/vancouver', {
    otherLocaleRef: otherLocaleRef
  });
});

module.exports = router;
