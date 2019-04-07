var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

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

    let otherLocaleRef = req.i18n.getLocale() == 'en'
        ? '/?lang=zh'
        : '/?lang=en';

    res.render('index', {
      otherLocaleRef: otherLocaleRef
    });
  }
});

router.get('/side-nav', function(req, res, next){
  res.render('side-nav');
})

router.get('/language', function (req, res, next) {
  res.render('language', { title: "Canadian Chinese School of Theology" });
});

router.get('/admissions', function (req, res, next) {
  let otherLocaleRef = req.i18n.getLocale() == 'en'
        ? '/admissions?lang=zh'
        : '/admissions?lang=en';

  res.render('admissions', { otherLocaleRef: otherLocaleRef });
})

module.exports = router;
