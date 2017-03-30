var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    email: String,
    username:String,
    userbio:String,
    password: String,
    image:String,
    followers:[{userId:String}],
    following:[{userId:String}]
});