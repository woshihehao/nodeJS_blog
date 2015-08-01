var express = require('express');
var http = require("http");
//以上是所需要的模块
var app = express();
//创建express的实例


var express = require('express');
var server = http.createServer();
var app = express();

app.get('/', function(req, res) {

});

app.post('/register', function(req, res) {

});

app.post('/login', function(req, res) {

});

app.post('/logout', function(req, res) {

});

app.get('/about', function(req, res) {

});

app.post('/add_blog', function(req, res) {

});

app.post('/edit_blog/:number',function(req, res) {

});

app.post('/del_blog/:number', function(req, res) {

});

app.get('/archives/:number', function(req, res) {

});

app.get('/tags/:tag_name/:number', function(req, res) {

});

app.get('/query/:condition', function(req, res) {

});



server.listen(8888);