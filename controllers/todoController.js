module.exports = function (app) {

    app.get('/todo', function (re, res) {
        res.render('todo')
    });

    app.post('/todo', function (re, res) {

    });

    app.delete('/todo', function (re, res) {

    });
};