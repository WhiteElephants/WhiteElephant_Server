var db = require("../models/mysql");
var wrap = require("../utils").Wrapper;

module.exports.reset = function (req, res) {
    db.sequelize.sync({force: true}).then(function () {
        res.json({status: true});
    });
};

module.exports.setupBasics = function (req, res) {

    db.User.create({
        id: "dsaoajs0djas231231290921039fd90f9sd0f9ds0",
        user_name: "gordon rawe",
        nick_name: "wind chaser",
        pass_word: "x213150003",
        telephone: "15121030486",
        email: "gordon.tongji@hotmail.com",
        address: "Shanghai city Jin Zhong Road Soho",
        motto: "We can make a fortune of this",
        birthday: "1990.04.15",
        wechat_no: "money8888888",
        weibo_no: "money8888888"
    }).then(function () {
        res.json(wrap(true, "", ""));
    }).catch(function (exception) {
        res.json(wrap(false, exception, ""))
    });
};