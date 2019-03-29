// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
let tDoController = require('../controllers/toDo');

/* GET home page. */
//  router.get('/', indexController.displayHomePage );

//  router.get('/about', indexController.displayAboutPage );

//  router.get('/projects', indexController.displayProjectPage );

//  router.get('/services', indexController.displayServicesPage );

//  router.get('/contact', indexController.displayContactPage);

/* GET ToDO page. */
//  router.get('/todo', tDoController.displayToDoList);

/* GET - displays the Login Page */
//  router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//  router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
