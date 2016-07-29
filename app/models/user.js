var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var crypto = require('crypto');

var userSchema = new Schema({
    username: String,
    nickname: String,
    gender:{type:String,default:"male"},
    email: String,
    address: String,
    tel: String,
    hashed_password: {type: String, default: ''},
    salt: {type: String, default: ''},
    date: {type: Date, default: Date.now}
});

// Virtuals
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password
    });

//Methods
userSchema.methods = {
    //Authenticate - check if the passwords are the same
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    //Make salt
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    //Encrypt password
    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports.UserModel = mongoose.model('UserModel', userSchema);