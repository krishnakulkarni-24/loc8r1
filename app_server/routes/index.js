var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Location info' });
});
router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});
router.get('/signin',ctrlMain.signin );

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});
//exports command//
module.exports = router;
