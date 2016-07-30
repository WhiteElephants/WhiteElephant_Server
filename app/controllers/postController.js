var wrap = require("../utils").Wrapper;
var PostSchema = require("../models/mongo").PostSchema;
var redis = require("redis").createClient();

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
            redis.hmset(["posts:" + retrieve.id, "title", retrieve.title, "time", retrieve.time], function (err) {
                if (err) {
                    res.json(wrap(false, err, {}));
                } else {
                    res.json(wrap(true, "", {title: retrieve.title, id: retrieve.id}));
                }
            });
        }
    });
};

/** hmset & hmget to store and retrieve,for posts, we use the post:post_id as key,yeah let's do it. */

module.exports.all = function (req, res) {
    redis.keys("posts:*", function (err, keys) {
        if (err) {
            res.json(wrap(false, err, {}));
        }else{
            redis.hmget();
        }
    });
};