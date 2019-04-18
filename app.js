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
      "other_locale": "中文",

      "admissions": "admissions",
      "student_resources": "student",
      "academics": "academics",


      "motto1": "Building Theological Education",
      "motto2": "Passing on the legacy of pastoring and mission",
      "findAProgram": "Find a program",
      "applyTo": "Apply to Canadian Chinese School of Theology Vancouver",
      "requestInfo": "Request Info",
      "knowMoreAboutUs" : "Know more about us",
      "whatHappening": "What's happening at Canadian Chinese School of Theology Vancouver",
      "buildingNewsTitle": "購買校舍",
      "buildingNews1": "感謝神，我們憑信心在 3 月 19 日撤除條件，業主也在 3 月 21 日撤除賣買合約內的條件，物業正式成交日期是 2019 年 7 月 16 日。目前，我們已經籌得大約二百七十萬，包括奉獻、免息貸款、認獻等。多謝董事、同工們、同學們、教會和弟兄姊妹奉獻支持購買校舍。",
      "buildingNews2": "這物業將於 2019 年 7 月 16 日正式成交，我們需要支付約三百二十五萬，這包括物業樓價、5% GST、物業轉換稅、律師費、物業估價費等，其餘二十五萬則用作裝修校舍、校舍搬遷、添置校舍設備、傢俬和發展圖書館等用途。",
      "buildingNews3": "我們決定不向銀行申請貸款。如接近成交時間還未有足夠資金, 兩位校內同工已表示樂意借出他們的信用貸款額 (Line of Credit) $470,000，給神學院購買校舍之用。另外，一位在卡加利的姊妹也願意借出 $200,000 的信用貸款額。我們深信神必預備超乎人意的供應！",
      "buildingNews4": "若在物業成交日之前，神感動教會、弟兄姊妹有足夠的奉獻和免息貸款，我們就不需要借用這些有利息的信用貸款額了。「加神溫哥華」的團隊學習專心倚靠神，深信衪是耶和華以勒。(創 22:14)",
    
      "vanCharacterTitle": "Vancover Charactistics",
      "vanCharacter1": "學術與靈性兼備 - 「加神溫哥華」的神學訓練強調靈命進深、學術研究和事奉技巧三方面。因應華人教會的需要, 我們盡心盡力培育靈命成熟的牧者和宣教士, 訓練豐富聖經和神學知識的學者, 和培訓事奉技巧純熟的工人, 回應主的大使命和牧養主的羊。",
      "vanCharacter2": "目標的裝備 – 「加神溫哥華」的課程是研究院的課程, 有目的地培訓不同事奉心志的弟兄姊妹。不只是讓同學們選讀喜歡或勝任的科目,而是在聖經、神學及歷史和教牧實踐的方向上, 也得到有系統的認識和了解。對道學碩士課程(MDiv)的同學來說, 課程更是培育他們一生以祈禱傳道為念, 並提供實習科目鍛鍊傳道生涯。",

      "progDMin": "DMin",
      "progDMinDesc": "this is the description of DMin",
      "progMDiv": "MDiv",
      "progMts": "MTS",
      "progDipcs": "DipCS",
      "progNonDegree": "Non Degree",
      "progAudit": "Audit"

    },
    "zh": {
      "Title": "加拿大華人神學院温歌華",
      "other_locale": "ENG",
      "other_locale_ref": "./$s?lang=en",

      "admissions": "入讀本校",
      "student_resources": "學生資源",
      "academics": "教務部",
        
      "motto1": "建構神學教育",
      "motto2": "傳承牧養宣教",
      "findAProgram": "Find a program",
      "applyTo": "Apply to Canadian Chinese School of Theology Vancouver",
      "requestInfo": "Request Info",
      "knowMoreAboutUs" : "Know more about us",
      "buildingNewsTitle": "購買校舍",
      "whatHappening": "What's happening at Canadian Chinese School of Theology Vancouver",
      "buildingNews1": "感謝神，我們憑信心在 3 月 19 日撤除條件，業主也在 3 月 21 日撤除賣買合約內的條件，物業正式成交日期是 2019 年 7 月 16 日。目前，我們已經籌得大約二百七十萬，包括奉獻、免息貸款、認獻等。多謝董事、同工們、同學們、教會和弟兄姊妹奉獻支持購買校舍。",
      "buildingNews2": "這物業將於 2019 年 7 月 16 日正式成交，我們需要支付約三百二十五萬，這包括物業樓價、5% GST、物業轉換稅、律師費、物業估價費等，其餘二十五萬則用作裝修校舍、校舍搬遷、添置校舍設備、傢俬和發展圖書館等用途。",
      "buildingNews3": "我們決定不向銀行申請貸款。如接近成交時間還未有足夠資金, 兩位校內同工已表示樂意借出他們的信用貸款額 (Line of Credit) $470,000，給神學院購買校舍之用。另外，一位在卡加利的姊妹也願意借出 $200,000 的信用貸款額。我們深信神必預備超乎人意的供應！",
      "buildingNews4": "若在物業成交日之前，神感動教會、弟兄姊妹有足夠的奉獻和免息貸款，我們就不需要借用這些有利息的信用貸款額了。「加神溫哥華」的團隊學習專心倚靠神，深信衪是耶和華以勒。(創 22:14)",
      
      "vanCharacterTitle": "Vancover Charactistics",
      "vanCharacter1": "學術與靈性兼備 - 「加神溫哥華」的神學訓練強調靈命進深、學術研究和事奉技巧三方面。因應華人教會的需要, 我們盡心盡力培育靈命成熟的牧者和宣教士, 訓練豐富聖經和神學知識的學者, 和培訓事奉技巧純熟的工人, 回應主的大使命和牧養主的羊。",
      "vanCharacter2": "目標的裝備 – 「加神溫哥華」的課程是研究院的課程, 有目的地培訓不同事奉心志的弟兄姊妹。不只是讓同學們選讀喜歡或勝任的科目,而是在聖經、神學及歷史和教牧實踐的方向上, 也得到有系統的認識和了解。對道學碩士課程(MDiv)的同學來說, 課程更是培育他們一生以祈禱傳道為念, 並提供實習科目鍛鍊傳道生涯。",
      
      "progDMin": "教牧學博士",
      "progDMinDesc": "是為培育及進深裝備教牧領袖而設計的專業博士學位，目的是讓他們所帶領的機構或會眾可領受嶄新的使命，更趨成熟。",
      "progMDiv": "道學碩士",
      "progMts": "神學研究碩士",
      "progDipcs": "基督教研究文憑",
      "progNonDegree": "非學位學習",
      "progAudit": "旁聽學習"
    },
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
