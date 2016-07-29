/**
 * Created by gordon on 16/7/29.
 */

"use strict";
var Sequelize = require("sequelize");
var connection = global.config.connection;

var sequelize = new Sequelize(connection.database, connection.username, connection.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var User = sequelize.define('users', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    user_name: {
        type: Sequelize.STRING,
        field: 'user_name'
    },
    nick_name: {
        type: Sequelize.STRING,
        field: 'nick_name'
    },
    pass_word: {
        type: Sequelize.STRING,
        field: 'pass_word'
    },
    telephone: {
        type: Sequelize.STRING,
        field: 'telephone'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    address: {
        type: Sequelize.STRING,
        field: 'address'
    },
    motto: {
        type: Sequelize.STRING,
        field: 'motto'
    },
    birthday: {
        type: Sequelize.STRING,
        field: 'birthday'
    },
    wechat_no: {
        type: Sequelize.STRING,
        field: 'wechat_no'
    },
    weibo_no: {
        type: Sequelize.STRING,
        field: 'weibo_no'
    }
}, {
    freezeTableName: true
});

//export the models
module.exports.User = User;

//export the db
module.exports.sequelize = sequelize;