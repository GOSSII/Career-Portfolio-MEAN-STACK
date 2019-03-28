let express = require('express');
let router = express.Router();


module.exports.displayProjectJBPlateDepo = (req, res, next) => {
    res.render("projects/jbplatedepo", { title: "JB Plate Depo" });
};

module.exports.displayProjectMightyCause = (req, res, next) => {
    res.render("projects/mightycause", { title: "Mighty Cause" });
  };