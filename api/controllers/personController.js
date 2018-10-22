'use strict';
var mongoose = require('mongoose'),
Message = mongoose.model('Person');

exports.list_all_persons = function(req, res) {
    Person.find({}, function(err, person) {
      if (err)
      res.send(err);
      res.json(person);
   });
};

exports.register_a_person = function(req, res) {
   var new_msg = new Person(req.body);
   new_msg.save(function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

exports.check_some_person = function(req, res) {
    Person.findById(req.params.personId, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

exports.update_a_person = function(req, res) {
    Person.findOneAndUpdate({_id: req.params.personId}, req.name, {new: true}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};

// exports.delete_a_message = function(req, res) {
//     Person.remove({
//       _id: req.params.msgId
//    }, function(err, msg) {
//    if (err)
//       res.send(err);
//    res.json({ message: 'Message successfully deleted' });
//    });
// };