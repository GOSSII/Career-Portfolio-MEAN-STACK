// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require("express");
let router = express.Router();
let ProjectController = require('../controllers/projects');
/* GET home page. */

router.get("/jbplatedepo", ProjectController.displayProjectJBPlateDepo);

router.get("/mightycause", ProjectController.displayProjectMightyCause);

module.exports = router;
