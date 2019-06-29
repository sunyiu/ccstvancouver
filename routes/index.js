var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* Get student resources page */
router.get('/student-resources', function (req, res, next) {
  res.render('student-resources');
})






module.exports = router;
