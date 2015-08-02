var express = require('express');
var fs = require('fs');
var models = require('./models');

var body_parser = require('body-parser');

//以上是所需要的模块
var express = require('express');
var app = express();
//创建express的实例

app.use(body_parser());


app.get('/', function (req, res) {
    console.log("Hello world")
});

app.post('/register', function (req, res) {

});

app.post('/login', function (req, res) {

});

app.post('/logout', function (req, res) {

});

app.get('/about', function (req, res) {

});

app.post('/add_blog', function (req, res) {

    var title = req.body.title;
    var body = req.body.body;
    var blogs = models.load_blogs();
    models.add_blog(blogs,title,body);
    models.store_blogs(blogs)

    res.send("OK");
});

app.post('/edit_blog/:id', function (req, res) {

});

app.post('/del_blog/:id', function (req, res) {

});

app.get('/archives/:id', function (req, res) {

});

app.get('/tags/:tag_name/:id', function (req, res) {

});

app.get('/query/:id', function (req, res) {

    var id = req.param("id");

    var blog = models.query_title( id);

    res.send(JSON.stringify(blog));
});

app.listen(3000);