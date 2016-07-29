var express = require('express');
var userController = require('../app/controllers/postController');
var mainController = require('../app/controllers/accountController');

module.exports = function (app) {
    app.get('/', mainController.showIndexPage);

    app.use("/users", (function () {
        var router = express.Router();

        return router;
    })());

    //error handling
    app.use(function (err, req, res, next) {
        // treat as 404
        if (err.message
            && (~err.message.indexOf('not found')
            || (~err.message.indexOf('Cast to ObjectId failed')))) {
            return next();
        }
        console.error(err.stack);
        // error page
        res.status(500).render('500', {error: err.stack});
    });

    // assume 404 since no middleware responded
    app.use(function (req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
