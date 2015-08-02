var express = require('express');
var fs = require('fs');

var body_parser = require('body-parser');

var iconv = require('iconv-lite');// 加载编码转换模块
//以上是所需要的模块
var express = require('express');
var app = express();
//创建express的实例

app.use(body_parser());




app.get('/', function(req, res) {
    console.log("Hello world")
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

    var title = req.body.title;
    var body = req.body.body;
    var json_string = fs.readFileSync('blog.json').toString();
    var blogs = eval('(' + json_string + ')');


    blogs.next_id += 1;
    var blog = {
        id: blogs.next_id,
        title: title,
        body: body
    };
    blogs.articles.push(blog);

    fs.writeFile("blog.json", JSON.stringify(blogs), 'utf8', function() {
        console.log("Stored in file");
    });
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

app.listen(3000);