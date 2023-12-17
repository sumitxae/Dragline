var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boom');
});

router.get('/rear', function(req, res, next) {
  res.render('Rear');
});

router.get('/effec', function(req, res, next) {
  res.render('Effec');
});

module.exports = router;
