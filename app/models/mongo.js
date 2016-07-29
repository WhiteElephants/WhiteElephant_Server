var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NodeSchema = new Schema({
    text: String,
    imageUrl: String,
    imageDescription: String
});

var PostSchema = new Schema({
    title: String,
    authorName: String,
    readCount: Number,
    nodes: [NodeSchema]
});

module.exports.NodeSchema = mongoose.model('NodeSchema', NodeSchema);
module.exports.PostSchema = mongoose.model('PostSchema', PostSchema);