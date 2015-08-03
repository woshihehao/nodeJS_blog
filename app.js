var express = require('express');
var fs = require('fs');
var model = require('./models');
var mysql = require('mysql');
var body_parser = require('body-parser');


var session = require('express-session');

//以上是所需要的模块

var app = express();
//创建express的实例

app.use(body_parser());//读取POST内容


app.use(session({
    secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK'
}));
var user = new model.User();
var blog = new model.Blog();


app.get('/', function (req, res) {
    console.log("Hello world")
});
var check_out_user = function (req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.send("you have no right to take the operation\n");
    }
};
app.post('/register', function (req, res) {
    username = req.body.username;
    password = req.body.password;
    user.register(username,password);
    res.send("OK");
});

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    user.login(username, password, function (id) {
        if (id != -1) {
            req.session.user_id = id;
            res.send("you are logged in successfully\n");
        } else {
            res.send("username doesn't match password\n");
        }
    });


});

app.post('/logout',check_out_user, function (req, res) {
     req.session.user_id = NULL;
    res.redirect('/login');
});



app.post('/add_blog',check_out_user, function (req, res) {

    var title = req.body.title;
    var content = req.body.content;


    blog.new_post(title, content);


    res.send("OK");
});



app.post('/del_blog/:id', check_out_user,function (req, res) {
    var id = req.param("id");


    blog.delete(Number(req.param('id')));

    res.send("delete");


});



app.get('/tags/:tag_name/:id', function (req, res) {

});

app.get('/query/:id',check_out_user, function (req, res) {

    blog.query('id',req.param('id'));

});
app.post('/edit_blog/:id', check_out_user,function (req, res) {
    blog.query('id', req.param('id'));
    var title = req.body.title;
    var content = req.body.content;
    blog.edit(Number(req.param('id')), title, content);
    blog.query('id', req.param('id'));
});
app.listen(3000);