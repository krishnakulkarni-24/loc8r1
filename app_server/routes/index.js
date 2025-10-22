var express = require('express'); 
var router = express.Router(); 
var ctrlLocations = require('../controllers/locations'); 
var ctrlothers = require('../controllers/others'); 
var ctrlmain = require('../controllers/main'); 
 
router.get('/', ctrlLocations.homelist); 
router.get('/locations', ctrlLocations.locationInfo); 
router.get('/location1', ctrlLocations.locationInfo1); 
router.get('/location2', ctrlLocations.locationInfo2); 
router.get('/review', ctrlLocations.addReview);
router.post('/review', ctrlLocations.doAddReview);
 
router.get('/about', ctrlothers.about); 
 
router.get('/signin', ctrlmain.signin);
router.post('/signin', ctrlmain.doSignin);
router.get('/register', ctrlmain.register);
router.post('/register', ctrlmain.doRegister);
  
   
module.exports = router;