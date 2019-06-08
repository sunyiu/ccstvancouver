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

//   res.render('academic/index', {
//     otherLocaleRef: otherLocaleRef
//   });
// });


router.get('/instructors', languageChecker, function (req, res, next) {
    let otherLocaleRef = req.i18n.getLocale() == 'en'
      ? '/?lang=zh'
      : '/?lang=en';
  
    res.render('academic/instructors', {
      otherLocaleRef: otherLocaleRef
    });
  });
  

module.exports = router;
