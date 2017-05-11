var express = require('express');

var myrouter = express.Router();

var items = [{id:1, desc:'foo'}, {id:2, desc:'bar'}, {id:3, desc:'baz'}];
var title = 'My App';


myrouter.get('/', function(req, res){
	res.render('index', {title:title, items:items});	
});

myrouter.post('/add', function(req, res){
	var newItem = req.body.newItem;
	items.push({id: items.length+1, desc:newItem});
	res.redirect('/');
});

module.exports = myrouter;