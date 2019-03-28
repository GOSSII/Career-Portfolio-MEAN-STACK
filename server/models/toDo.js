let mongoose = require('mongoose');

// create a model class
let toDoSchema = mongoose.Schema({
    task: String,
    desc: String,
    completed: String
},
{
    collection: "todo"
});

module.exports = mongoose.model('todo', toDoSchema);