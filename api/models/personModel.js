'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
   name: {
      type: String
   },
   date: {
      type: Date,
      default:Date.now
   },
   times: {
      type: Number,
      default: 0
   }
});
module.exports = mongoose.model('Person', personSchema);