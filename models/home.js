var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeSchema = new Schema({

    types : String,
    title : String,
    picture : String,
    tutorName : String,
    duration : String

}, {versionKey : false});

module.exports = mongoose.model('home', homeSchema);