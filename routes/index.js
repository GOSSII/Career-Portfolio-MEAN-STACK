// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
module.exports = router;
