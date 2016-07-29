var wrap = require("../utils").Wrapper;
var NodeSchema = require("../models/mongo").NodeSchema;
var PostSchema = require("../models/mongo").PostSchema;

module.exports.create = function (req, res) {
    // var node = new NodeSchema({text: "hahahah"});
    // node.(function (err, nodeValue) {
    //     if (err) return res.json(wrap(true, "", nodeValue));
    //     else res.json(wrap(false, err, ""));
    // });
    res.json(wrap(false, "something", ""));
};
