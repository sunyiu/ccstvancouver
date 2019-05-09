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

/* GET admissions pages. */
router.get('/admissions-vancouver', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-vancouver?lang=zh'
    : '/admissions-vancouver?lang=en';

  res.render('admissions-vancouver', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 0 });
})

router.get('/admissions-apply', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-apply?lang=zh'
    : '/admissions-apply?lang=en';

  res.render('admissions-apply', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 1  });
})

router.get('/admissions-programs', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-programs?lang=zh'
    : '/admissions-programs?lang=en';

  res.render('admissions-programs', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 2  });
})

router.get('/admissions-fees', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-fees?lang=zh'
    : '/admissions-fees?lang=en';

  res.render('admissions-fees', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 3  });
})

router.get('/admissions-finanical', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-finanical?lang=zh'
    : '/admissions-finanical?lang=en';

  res.render('admissions-finanical', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 4  });
})

router.get('/admissions-international', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/admissions-international?lang=zh'
    : '/admissions-international?lang=en';

  res.render('admissions-international', { otherLocaleRef: otherLocaleRef, sideNavHLIndex: 5  });
})

/* Get student resources page */
router.get('/student-resources', languageChecker, function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
    ? '/student-resources?lang=zh'
    : '/student-resources?lang=en';

  res.render('student-resources', { otherLocaleRef: otherLocaleRef });
})


/* Get language page */
router.get('/language', function (req, res, next) {
  res.render('language', { title: "Canadian Chinese School of Theology" });
});



module.exports = router;
