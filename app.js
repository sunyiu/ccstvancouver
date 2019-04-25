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
      "copyright": "© 2019 Canadian Chinese School of Theology Vancouve – All Rights Reserved.",

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
    
      "vanCharacterTitle": "加神溫哥華特色",
      "vanCharacter1Title": "學術與靈性兼備",
      "vanCharacter1": "「加神溫哥華」的神學訓練強調靈命進深、學術研究和事奉技巧三方面。因應華人教會的需要, 我們盡心盡力培育靈命成熟的牧者和宣教士, 訓練豐富聖經和神學知識的學者, 和培訓事奉技巧純熟的工人, 回應主的大使命和牧養主的羊。",
      "vanCharacter2Title":"目標的裝備",
      "vanCharacter2": "「加神溫哥華」的課程是研究院的課程, 有目的地培訓不同事奉心志的弟兄姊妹。不只是讓同學們選讀喜歡或勝任的科目,而是在聖經、神學及歷史和教牧實踐的方向上, 也得到有系統的認識和了解。對道學碩士課程(MDiv)的同學來說, 課程更是培育他們一生以祈禱傳道為念, 並提供實習科目鍛鍊傳道生涯。",
      "vanCharacter3Title":"長遠的裝備",
      "vanCharacter3": "「加神」現為亞洲神學協會(ATA)的會員, 畢業生將來可以在ATA 會員的高等學院進修其他課程, 或在學術繼續深造。",
      "vanCharacter4Title":"全面的裝備",
      "vanCharacter4":"「加神溫哥華」的課程是有系統地編排的神學裝備,讓學生按著課程編排和個人進度, 用心完成論文及考試, 便能在指定時間內完成聖經、神學及歷史, 和教牧實踐等的全面學習課程。",
      "vanCharacter5Title":"師徒式的學習",
      "vanCharacter5":"「加神溫哥華」的課程採用師生互動的授課模式,強調培育學生的靈性和品格。效法耶穌訓練門徒的方法, 以生命影響生命。",
      "vanCharacter6Title":"本色化的學習",
      "vanCharacter6":"北美華人教會一般都是服侍兩文三語的會眾, 「加神溫哥華」的教授團隊均有豐富的學術或北美牧會經驗, 以致可以適切地裝備學生回應兩文三語教會的需要。",
      
      "applyTitle": "申請入學",
      "applySubTitle1":"申請入學需知",
      "apply1_1":"申請者必須填妥入學申請表，連同所需文件及報名費$50(不設退款)交回本院辦公室。",
      "apply1_2":"申請者必須達到入學的教育程度要求, 提交畢業證明文件及成績單正本。",
      "apply1_2a":"教牧學博士: 申請人必須擁有道學碩士學位 (其他條件請參閱教牧學博士版面)",
      "apply1_2b":"道學碩士：申請人必須具備認可大學的本科學位",
      "apply1_2c":" 神學研究碩士：申請人必須具備認可大學的本科學位",
      "apply1_2d":"基督教研究文憑: 申請人必須具備認可大學的本科學位, 或大專文憑。",
      "apply1_2e":"非學位學習: 申請人必須具備認可的大學本科學位或同等學歷",
      "apply1_2f":" 旁聽學習: 旁聽生必須持有高中畢業文憑或同等學歷",
      "apply1_3":"申請者必須具備英文閱讀程度：TOEFL 450 (Paper-Based), 47 (Internet-Based)或 IELTS 4。申請者必須提交兩年內認可的英文考試成績。申請者亦可以提交曾在英語授課的高中或大專學校全時間就讀三年的證明文件，由教務長審核是否可以取代以上的公開認可英文考試成績。如有需要, 申請者或被要求參加本院的英文閱讀程度評估測驗。",
      "apply1_4":"申請者必須提交：",
      "apply1_4a":"得救蒙召見證一份 (1000 字內)",
      "apply1_4b":"推薦信 (不同課程的不同要求)",
      "apply1_4b1":"教牧學博士: 三份推薦信(1. 所屬教會牧者 2. 教牧推薦 3. 學術或僱主推薦)",
      "apply1_4b2":"道學碩士：三份推薦信(1. 所屬教會牧者 2. 教牧推薦 3. 學術或僱主推薦)",
      "apply1_4b3":"神學研究碩士：兩份推薦信(1. 所屬教會牧者 2. 教牧推薦或 3. 學術或僱主推薦)",
      "apply1_4b4":"基督教研究文憑: 一份推薦信(1. 所屬教會牧者或 2. 教牧推薦)",
      "apply1_4c":"道學碩士申請者如已婚，配偶也須填寫一封推薦信。",
      "apply1_5":"道學碩士申請者必須接受聖經測驗。",
      "apply1_6":"教牧學博士、道學碩士及基督教研究碩士申請者必須接受入學面試。",
      "applySubTitle2": "申請程序",
      "apply2_1":"當本院註冊處收到申請人所有相關表格、文件及報名費後, 便會安排入學面試, 當申請入正式被取錄, 將會收到入學通知書。",
      "apply2_2":"申請人收到入學通知書後, 必須簽署接納成為「加神溫哥華」的學生, 並繳交$300 按金作為留位費。$300 按金將於日後登記的課堂學費中扣除。",
      "applySubTitle3":"常見問題",
      "apply3_1a":"請問「加神溫哥華」一年有幾個學期？",
      "apply3_1b":"一年有三個學期, 春季 1-4 月, 夏季 5-6 月 秋季 9-12 月",
      "apply3_2a":"一般來說大學院校 5、6 月就放假了，那麼 5 月—9 月之間有課嗎？",
      "apply3_2b":"「加神溫哥華」全年收生, 而 5 月至 7 月期間也有夏季課程。課堂有全期的(分十二節), 也有學期中間密集式的, 如一星期五天上完一個科目等。詳情請參考課程時間表。",      
      "apply3_3a":"我是想從另一所神學院轉到「加神溫哥華」，是否可免去申請入學的手續呢？",
      "apply3_3b":"我在該神學院就讀的成績，可否轉到貴院校呢？我們需要更多有關你所就讀神學院的資料, 例如是否 ATA 認證。也更需要你曾經讀過課堂的成績單及課程大綱(syllabus);日後你成為我們學生後, 申請將學分轉移必須填寫有關表格及付費; 而我們的教務長將審核你的申請。課程的總學分最多不能有多於三份一的非本院學分。",      
      "apply3_4a":"「加神溫哥華」一個學分多少錢？學院有助學金嗎? ",
      "apply3_4b":"本院收費為$892 一科, 申請費$50(不設退還), 有助學金提供給有經濟需要的同學, 但必須先繳交學費, 申請成功後, 我們會以支票形式頒發助學金。",      
      "applySubTitle4":"申請表及相關文件請與註冊處聯絡",
            
      "program": "Program",
      "progDMin": "DMin",
      "progDMinDesc": "本課程是為培育及進深裝備教牧領袖而設計的專業博士學位，目的是讓他們所帶領的機構或會眾可領受嶄新的使命，更趨成熟。",
      "progMDiv": "MDiv",
      "progMDivDesc": "本課程以聖經、神學、歷史為核心，並配合實際的牧會經驗、具體的華人文化應用、靈命塑造操練、教會歷史反省、近代領袖培育、教會工場實習、暑期短宣參與等方面，來裝備這時代教會合用的工人",
      "progMts": "MTS",
      "progMtsDesc": "本課程以聖經神學為基礎，並配合實際教會事奉經驗、具體華人文化、靈命塑造與操練、屬靈領袖培育、教會教導職事、職場與信仰實踐等方面，來裝備信徒參與教會領導及教導事奉，並於生活及職場中為主作見證。",
      "progDipcs": "DipCS",
      "progDipcsDesc": "本課程通過在聖經科、神學科和實用神學的專門學習, 加強信徒在事奉上的基礎裝備訓練。",
      "progNonDegree": "Non Degree",
      "progNonDegreeDesc": "申請人如未能確定所要修讀的課程, 可以先選讀「非學位課程」, 用這種學習方式去探索神學進修的方向。",
      "progAudit": "Audit",
      "progAuditDesc": "本院大部份的課堂均設有有限的旁聽席, 申請者填報旁聽生申請表及繳交$20 申請費, 經審核後便可以成為本院旁聽生。"      

    },
    "zh": {
      "Title": "加拿大華人神學院温歌華",
      "other_locale": "ENG",
      "other_locale_ref": "./$s?lang=en",
      "copyright": "© 2019 加拿大華人神學院温歌華 – 版權所有。",

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
      
      "vanCharacterTitle": "加神溫哥華特色",
      "vanCharacter1Title": "學術與靈性兼備",
      "vanCharacter1": "「加神溫哥華」的神學訓練強調靈命進深、學術研究和事奉技巧三方面。因應華人教會的需要, 我們盡心盡力培育靈命成熟的牧者和宣教士, 訓練豐富聖經和神學知識的學者, 和培訓事奉技巧純熟的工人, 回應主的大使命和牧養主的羊。",
      "vanCharacter2Title":"目標的裝備",
      "vanCharacter2": "「加神溫哥華」的課程是研究院的課程, 有目的地培訓不同事奉心志的弟兄姊妹。不只是讓同學們選讀喜歡或勝任的科目,而是在聖經、神學及歷史和教牧實踐的方向上, 也得到有系統的認識和了解。對道學碩士課程(MDiv)的同學來說, 課程更是培育他們一生以祈禱傳道為念, 並提供實習科目鍛鍊傳道生涯。",
      "vanCharacter3Title":"長遠的裝備",
      "vanCharacter3": "「加神」現為亞洲神學協會(ATA)的會員, 畢業生將來可以在ATA 會員的高等學院進修其他課程, 或在學術繼續深造。",
      "vanCharacter4Title":"全面的裝備",
      "vanCharacter4":"「加神溫哥華」的課程是有系統地編排的神學裝備,讓學生按著課程編排和個人進度, 用心完成論文及考試, 便能在指定時間內完成聖經、神學及歷史, 和教牧實踐等的全面學習課程。",
      "vanCharacter5Title":"師徒式的學習",
      "vanCharacter5":"「加神溫哥華」的課程採用師生互動的授課模式,強調培育學生的靈性和品格。效法耶穌訓練門徒的方法, 以生命影響生命。",
      "vanCharacter6Title":"本色化的學習",
      "vanCharacter6":"北美華人教會一般都是服侍兩文三語的會眾, 「加神溫哥華」的教授團隊均有豐富的學術或北美牧會經驗, 以致可以適切地裝備學生回應兩文三語教會的需要。",
      
      "applyTitle": "申請入學",
      "applySubTitle1":"申請入學需知",
      "apply1_1":"申請者必須填妥入學申請表，連同所需文件及報名費$50(不設退款)交回本院辦公室。",
      "apply1_2":"申請者必須達到入學的教育程度要求, 提交畢業證明文件及成績單正本。",
      "apply1_2a":"申請人必須擁有道學碩士學位 (其他條件請參閱教牧學博士版面)",
      "apply1_2b":"申請人必須具備認可大學的本科學位",
      "apply1_2c":"申請人必須具備認可大學的本科學位",
      "apply1_2d":"申請人必須具備認可大學的本科學位, 或大專文憑。",
      "apply1_2e":"申請人必須具備認可的大學本科學位或同等學歷",
      "apply1_2f":"旁聽生必須持有高中畢業文憑或同等學歷",
      "apply1_3":"申請者必須具備英文閱讀程度：TOEFL 450 (Paper-Based), 47 (Internet-Based)或 IELTS 4。申請者必須提交兩年內認可的英文考試成績。申請者亦可以提交曾在英語授課的高中或大專學校全時間就讀三年的證明文件，由教務長審核是否可以取代以上的公開認可英文考試成績。如有需要, 申請者或被要求參加本院的英文閱讀程度評估測驗。",
      "apply1_4":"申請者必須提交：",
      "apply1_4a":"得救蒙召見證一份 (1000 字內)",
      "apply1_4b":"推薦信 (不同課程的不同要求)",
      "apply1_4b1":"教牧學博士: 三份推薦信(1. 所屬教會牧者 2. 教牧推薦 3. 學術或僱主推薦)",
      "apply1_4b2":"道學碩士：三份推薦信(1. 所屬教會牧者 2. 教牧推薦 3. 學術或僱主推薦)",
      "apply1_4b3":"神學研究碩士：兩份推薦信(1. 所屬教會牧者 2. 教牧推薦或 3. 學術或僱主推薦)",
      "apply1_4b4":"基督教研究文憑: 一份推薦信(1. 所屬教會牧者或 2. 教牧推薦)",
      "apply1_4c":"道學碩士申請者如已婚，配偶也須填寫一封推薦信。",
      "apply1_5":"道學碩士申請者必須接受聖經測驗。",
      "apply1_6":"教牧學博士、道學碩士及基督教研究碩士申請者必須接受入學面試。",
      "applySubTitle2": "申請程序",
      "apply2_1":"當本院註冊處收到申請人所有相關表格、文件及報名費後, 便會安排入學面試, 當申請入正式被取錄, 將會收到入學通知書。",
      "apply2_2":"申請人收到入學通知書後, 必須簽署接納成為「加神溫哥華」的學生, 並繳交$300 按金作為留位費。$300 按金將於日後登記的課堂學費中扣除。",
      "applySubTitle3":"常見問題",
      "apply3_1a":"請問「加神溫哥華」一年有幾個學期？",
      "apply3_1b":"一年有三個學期, 春季 1-4 月, 夏季 5-6 月 秋季 9-12 月",
      "apply3_2a":"一般來說大學院校 5、6 月就放假了，那麼 5 月—9 月之間有課嗎？",
      "apply3_2b":"「加神溫哥華」全年收生, 而 5 月至 7 月期間也有夏季課程。課堂有全期的(分十二節), 也有學期中間密集式的, 如一星期五天上完一個科目等。詳情請參考課程時間表。",      
      "apply3_3a":"我是想從另一所神學院轉到「加神溫哥華」，是否可免去申請入學的手續呢？",
      "apply3_3b":"我在該神學院就讀的成績，可否轉到貴院校呢？我們需要更多有關你所就讀神學院的資料, 例如是否 ATA 認證。也更需要你曾經讀過課堂的成績單及課程大綱(syllabus);日後你成為我們學生後, 申請將學分轉移必須填寫有關表格及付費; 而我們的教務長將審核你的申請。課程的總學分最多不能有多於三份一的非本院學分。",      
      "apply3_4a":"「加神溫哥華」一個學分多少錢？學院有助學金嗎? ",
      "apply3_4b":"本院收費為$892 一科, 申請費$50(不設退還), 有助學金提供給有經濟需要的同學, 但必須先繳交學費, 申請成功後, 我們會以支票形式頒發助學金。",      
      "applySubTitle4":"申請表及相關文件請與註冊處聯絡",
      
      "program": "課程",
      "progDMin": "教牧學博士",
      "progDMinDesc": "本課程是為培育及進深裝備教牧領袖而設計的專業博士學位，目的是讓他們所帶領的機構或會眾可領受嶄新的使命，更趨成熟。",
      "progMDiv": "道學碩士",
      "progMDivDesc": "本課程以聖經、神學、歷史為核心，並配合實際的牧會經驗、具體的華人文化應用、靈命塑造操練、教會歷史反省、近代領袖培育、教會工場實習、暑期短宣參與等方面，來裝備這時代教會合用的工人",
      "progMts": "神學研究碩士",
      "progMtsDesc": "本課程以聖經神學為基礎，並配合實際教會事奉經驗、具體華人文化、靈命塑造與操練、屬靈領袖培育、教會教導職事、職場與信仰實踐等方面，來裝備信徒參與教會領導及教導事奉，並於生活及職場中為主作見證。",
      "progDipcs": "基督教研究文憑",
      "progDipcsDesc": "本課程通過在聖經科、神學科和實用神學的專門學習, 加強信徒在事奉上的基礎裝備訓練。",
      "progNonDegree": "非學位學習",
      "progNonDegreeDesc": "申請人如未能確定所要修讀的課程, 可以先選讀「非學位課程」, 用這種學習方式去探索神學進修的方向。",
      "progAudit": "旁聽學習",
      "progAuditDesc": "本院大部份的課堂均設有有限的旁聽席, 申請者填報旁聽生申請表及繳交$20 申請費, 經審核後便可以成為本院旁聽生。"
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
