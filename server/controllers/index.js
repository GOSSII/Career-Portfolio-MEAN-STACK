let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About' });
};

module.exports.displayProjectPage = (req, res, next) => {
  res.render('projects/index', { title: 'Products' });
}

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services', { title: 'services' });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
}

module.exports.displayToDoPage = (req, res, next) => {
  res.render('todo/index', { title: 'todo' });
}

