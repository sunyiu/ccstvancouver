var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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
  //locales: ['en', 'zh'],

  locales: {
    "en": {
      "Title": "Canadian Chinese School of Theology Vancouver",
      "Greeting": "Welcome to Canadian Chinese School of Theology Vancouver",
      "motto1": "Building Theological Education",
      "motto2": "Passing on the legacy of pastoring and mission"
    },
    "zh": {
      "Title": "加拿大華人神學院温哥華",
      "Greeting": "歡迎來到加拿大華人神學院温哥華",
      "motto1": "建構神學教育",
      "motto2": "傳承牧養宣教",
      "languageCSS": "languageCSS"
    }
  },
  
  // set the default locale
  defaultLocale: 'en',
  // set the cookie name
  cookieName: 'ccstvan_langpref'
});

app.use(express.static(path.join(__dirname, 'public')));

// set up the middleware
app.use(function(req, res, next) {
  req.i18n.setLocaleFromCookie();
  req.i18n.setLocaleFromQuery();
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
