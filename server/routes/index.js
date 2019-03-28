// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage );

router.get('/about', indexController.displayAboutPage );

router.get('/projects', indexController.displayProjectPage );

router.get('/services', indexController.displayServicesPage );

router.get('/contact', indexController.displayContactPage);

module.exports = router;
