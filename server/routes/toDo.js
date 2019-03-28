let express = require('express');
let router = express.Router();

let toDoController = require('../controllers/toDo');

/* GET Contact List page - READ Operation */
router.get('/', toDoController.displayToDoList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', toDoController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', toDoController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', toDoController.displayEditPage);

// /* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', toDoController.processEditPage);

// /* GET request to perform the delete action */
router.get('/delete/:id', toDoController.performDelete);

module.exports = router;