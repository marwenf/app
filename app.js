//Declare modules and vars
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080


//config app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

//use router
app.use(require('./router'));

//start app
app.listen(port, function() {
	console.log('listening on port ' + port);
});