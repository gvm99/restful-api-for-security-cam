var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),
Message = require('./api/models/personModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/msgdb');
mongoose.useNewUrlParser = true;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/personRoutes');

routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);