var wrap = require("../utils").Wrapper;
var PostSchema = require("../models/mongo").PostSchema;

module.exports.create = function (req, res) {
    var title = req.body.title;
    if (!title) res.json(wrap(false, "", {}));
    var readCount = parseInt(req.body.readCount);
    var authorName = req.body.authorName;
    var nodes = req.body.nodes;
    var post = new PostSchema({
        title: title,
        readCount: readCount,
        time: Date.now(),
        authorName: authorName,
        nodes: nodes
    });
    post.save(function (err, retrieve) {
        if (err) {
            res.json(wrap(false, "", {}));
        } else {
            res.json(wrap(true, "", {title: retrieve.title, id: retrieve.id}));
        }
    });
};

module.exports.delete = function (req, res) {
    var id = req.body.id;
    if (!id) return res.json(wrap(false, "", {}));
    PostSchema.remove({_id: id}, function (err) {
        if (err) {
            res.json(wrap(false, "", {}));
        } else {
            res.json(wrap(true, "", {}));
        }
    });
};

/**
 * id are necessary or we don't know which post to update.
 *
 * */

module.exports.update = function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var readCount = parseInt(req.body.readCount);
    var authorName = req.body.authorName;
    var nodes = req.body.nodes;
    if (!id) return res.json(wrap(false, "", {}));
    PostSchema.findOne({_id: id}, function (err, post) {
        if (err || !post) {
            return res.json(wrap(false, "", {}));
        }
        if (title) post.title = title;
        if (readCount) post.readCount = readCount;
        if (authorName) post.authorName = authorName;
        if (nodes) post.nodes = nodes;
        post.save(function (err, newValue) {
            if (err) {
                res.json(wrap(false, "", {}));
            } else {
                res.json(wrap(true, "", newValue));
            }
        });
    });
};

module.exports.all = function (req, res) {
    PostSchema.find({}).limit(10).select({title: 1, time: 1}).sort({time: 1}).exec(function (err, posts) {
        if (err) {
            res.json(wrap(false, "", {}));
        } else {
            res.json(wrap(true, "", posts));
        }
    });
};

module.exports.retrieve = function (req, res) {
    var id = req.body.id;
    if (!id) return res.json(wrap(false, "", {}));
    PostSchema.where({_id: id}).findOne(function (err, retrieve) {
        if (err || !retrieve) {
            return res.json(wrap(false, "", {}));
        } else {
            return res.json(wrap(true, "", retrieve));
        }
    });
};