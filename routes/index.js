var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.render('header');
  res.render('index', { title: 'Home' });
});

module.exports = router;
