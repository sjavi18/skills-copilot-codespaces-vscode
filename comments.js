// Create web server 
// Use express.js
// Use body-parser
// Use mongoose
// Use express-handlebars

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
mongoose.connect('mongodb://localhost/comment');

// Set up handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Setgit add comments.js
