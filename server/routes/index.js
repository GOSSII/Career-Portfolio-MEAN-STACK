// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
let tDoController = require('../controllers/toDo');

/* GET home page. */
router.get('/', indexController.displayHomePage );

router.get('/about', indexController.displayAboutPage );

router.get('/projects', indexController.displayProjectPage );

router.get('/services', indexController.displayServicesPage );

router.get('/contact', indexController.displayContactPage);

/* GET contact page. */
router.get('/todo', tDoController.displayToDoList);

module.exports = router;
