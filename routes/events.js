var express = require('express');
var router = express.Router();

router.get('/theology', function (req, res, next) {
  res.render('events/theology');
});;

router.get('/etc', function (req, res, next) {
  res.render('events/etc');
});


module.exports = router;
