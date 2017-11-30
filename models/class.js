var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    content: String,
    author: String,
    videoURl: String,
    videoDuration : String
});

module.exports = mongoose.model('class', classSchema);