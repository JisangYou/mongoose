var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var subSchema = mongoose.Schema({
    main:Number,
    sub:Number,
    color:Number
  },{ _id : false });
  
  var testSchema = new Schema({
      userId:{
        type : String,
        index : true
      },
      itemTag: [subSchema]
  }, { versionKey: false });

  module.exports = mongoose.model('class', testSchema);