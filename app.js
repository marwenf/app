//Declare modules and vars
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


//config app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

//use router
app.use(require('./router'));

//start app
app.listen(1337, function() {
	console.log('listening on port 1337');
});