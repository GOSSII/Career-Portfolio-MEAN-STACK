// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
let contactModel = require('../models/contact');



// Contact Form Processs
router.post('/postcontact', (req, res,next) => {
  console.log(req.body);
  let newContact = contactModel({
        "firstname": req.body.firstname,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "subject": req.body.subject,
        "message": req.body.message,
  }); 

  contactModel.create(newContact, (err, contact) => {
    if(err){
      console.log(err);
      res.end(err);
    }else{
      console.log(contact);
      res.render("/contact", { title: "I will Contact you Soon .!." });
      res.redirect('/contact');
    }
  })  
  
});       

module.exports = router;
// module.exports = mongoose.model('contact', contactSchema);
