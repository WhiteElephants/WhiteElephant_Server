var wrap = require("../utils").Wrapper;
var NodeSchema = require("../models/mongo").NodeSchema;
var PostSchema = require("../models/mongo").PostSchema;

module.exports.create = function (req, res) {
    var node = new NodeSchema({text: "hahahah"});
    node.save(function (err,tmpValue) {
        if (err) {
            res.json(wrap(false, "error happed", {}));
        } else {
            res.json(wrap(true, "", tmpValue));
        }
    });
};
