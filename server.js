// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
const uri = 'mongodb://localhost/rest_test';

// MongoDB
mongoose.connect(uri).then(
  () => {console.log('Conected to mongo')},
  err => {console.log(err)}
);

// Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
