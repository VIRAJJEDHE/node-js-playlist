let bodParser = require('body-parser');
let mongoose = require('mongoose');

// Connect to data base
mongoose.connect('<Connection URL>', { useNewUrlParser: true, useUnifiedTopology: true });

//Create a schema
let todoSchema = new mongoose.Schema({
    item: String
});

let todoModel = mongoose.model('Todo', todoSchema);

let urlEncodeParser = bodParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        //get data from MongDb
        todoModel.find({}, function(err, data){
            if (err) {
                throw err;
            }
            res.render('todo', { todos: data })
        });
    });

    app.post('/todo', urlEncodeParser, function (req, res) {
        //Get data from view and add to MOngo Db
        let newTodo = todoModel(req.body).save(function(err, data){
            if (err) {
                throw err;
            }
            res.json(data);
        });
    });

    app.delete('/todo/:item', function (req, res) {
        //Delete the requested item from MongoDb
        todoModel.find({item:req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
            if (err) {
                throw err
            }
            res.json(data);
        });
    });
};