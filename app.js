var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var admissionsRouter = require('./routes/admissions');
var academicRouter = require('./routes/academic');
//var usersRouter = require('./routes/users');

var i18n = require('i18n-2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// i18n setup
i18n.expressBind(app, {
  // setup some locales - other locales default to vi silently
  locales: ['en', 'zh_hans', 'zh_hant'],
  directory: __dirname + '/locales',
  extension: '.json',
  // set the default locale
  defaultLocale: 'en',
  // set the cookie name
  cookieName: 'ccstvan_langpref'
});

app.use(express.static(path.join(__dirname, 'public')));

// set up the middleware
app.use(function (req, res, next) {
  req.i18n.setLocaleFromCookie();
  req.i18n.setLocaleFromQuery();
  next();
});

/* Get language page */
app.get('/language', function (req, res, next) {
  res.render('language', { title: "Canadian Chinese School of Theology" });
});

// check language
app.get('*', (req, res, next) => {
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
});


app.use('/', indexRouter);
app.use('/academic', academicRouter);
app.use('/admissions', admissionsRouter);
//app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
