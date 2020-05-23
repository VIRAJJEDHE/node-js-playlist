let express = require('express');
let todoController = require('./controllers/todoController');

const PORT = 3000;

let app = express();

//Set Up template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(PORT, function () {
    console.log(`Listening to port ${PORT}`);
});