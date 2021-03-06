var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");
var morgan = require("morgan");
var config = require('./config/config');
global.config = config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan("combined"));

mongoose.connect(config.mongo.schema);//for now we don't use db.and we will open this if necessary...

//define the router and main handlers
require('./config/routes')(app);

//setting listen port
var server = app.listen(config.port, function () {
    console.log('App started listening on port %d', server.address().port);
});