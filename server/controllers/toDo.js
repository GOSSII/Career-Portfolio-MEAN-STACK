let express = require('express');
let router = express.Router();

// create a reference to the db schema
let contactModel = require('../models/toDo');

module.exports.displayToDoList = (req, res, next) => {
    contactModel.find((err, toDoList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('todo/index', {
                title: 'ToDo List',
                toDoList: toDoList,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
};


module.exports.displayAddPage = (req, res, next) => {
    res.render('todo/add', {
        title: 'Add New ToDO Item',
        displayName: req.user ? req.user.displayName : ""
    });
}


module.exports.processAddPage = (req, res, next) => {

    let newToDO = contactModel({
        "task": req.body.TaskName,
        "desc": req.body.Desc
    });

    contactModel.create(newToDO, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/todo');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, ToDOObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('todo/edit', {
                title: 'Edit Contact',
                todo: ToDOObject,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "task": req.body.TaskName,
        "desc": req.body.Desc,
        "completed": req.body.completed
    });

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/todo');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/todo');
        }
    });
}

