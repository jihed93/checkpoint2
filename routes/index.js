var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/services', function(req, res) {
  res.render('services');
});

module.exports = router;
