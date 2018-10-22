'use strict';

module.exports = function(app) {
var messages = require('../controllers/personController');

// messages Routes
app.route('/messages')
   .get(messages.list_all_persons)
   .post(messages.register_a_person);

   app.route('/messages/:personId')
   .get(messages.check_some_person)
   .put(messages.update_a_person)
};