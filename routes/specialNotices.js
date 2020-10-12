var express = require('express');
var router = express.Router();

router.get('/covid', function (req, res, next) {
  res.render('specialNotices/covid');
});


module.exports = router;
