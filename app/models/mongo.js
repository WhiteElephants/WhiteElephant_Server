var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    authorName: String,
    readCount: Number,
    time: {type: Date, default: Date.now},
    nodes: [{
        text: String,
        imageUrl: String,
        imageDescription: String
    }]
});

module.exports.PostSchema = mongoose.model('PostSchema', PostSchema);