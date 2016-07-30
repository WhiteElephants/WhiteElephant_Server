var express = require('express');
var postController = require('../app/controllers/postController');
var accountController = require('../app/controllers/accountController');
var mysqlController = require('../app/controllers/mysqlController');
var wrap = require("../app/utils").Wrapper;

module.exports = function (app) {

    //handle auth
    // app.use(function (req, res, next) {
    //     /** we should make sure the head request consists the necessary auth information,
    //      * basically the sid(service id) and the cid(channel id) are required,
    //      * the sid and the channel are contained in the auth.
    //      */
    //     var auth = req.body.auth;
    //
    //     if (auth == undefined || auth.sid != "a3bfa179d46741cf84baf1dedc809fe2" || auth.cid != "7b0fc70e97ff459ab3b16bac7fee08e7") {
    //         return res.json(wrap(false, "illegal request", {}));
    //     }
    //     next();
    // });

    app.use("/accounts", (function () {
        var router = express.Router();

        return router;
    })());

    app.use("/mysql", (function () {
        var router = express.Router();
        router.post("/reset", mysqlController.reset);
        return router;
    })());

    app.use("/posts", (function () {
        var router = express.Router();
        router.post("/create", postController.create);
        router.post("/all", postController.all)
        return router;
    })());

    // // assume 404 since no middleware responded
    app.use(function (req, res) {
        res.json(wrap(false, "url not mapped", {url: req.originalUrl}));
    });
}
;
