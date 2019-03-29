let express = require('express');
let router = express.Router();
let passport = require('passport');
let toDoController = require('../controllers/toDo');

// Auth Apis reuqest
function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - READ Operation */
router.get('/',  passport.authenticate('jwt', {session: false}),  toDoController.displayToDoList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add',  passport.authenticate('jwt', {session: false}),  toDoController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add',  passport.authenticate('jwt', {session: false}),  toDoController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id',  passport.authenticate('jwt', {session: false}),  toDoController.displayEditPage);

// /* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id',  passport.authenticate('jwt', {session: false}),  toDoController.processEditPage);

// /* GET request to perform the delete action */
router.get('/delete/:id',  passport.authenticate('jwt', {session: false}),  toDoController.performDelete);

module.exports = router;