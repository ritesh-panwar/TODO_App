//importing tasks from db
const Task = require('../models/task');

//Exporting home function
module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching Tasks from db');
            return;
        }
        return res.render('home', {
            title: "TODO App",
            task_list : tasks
        });
    });
}

//Exporting add-task function
module.exports.addtask = function(req, res){

    Task.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(err, newTask){
        if(err){
            console.log('error in creating the Task!');
            return;
        }
        console.log('***********', newTask);
        return res.redirect('back');
    });
}
