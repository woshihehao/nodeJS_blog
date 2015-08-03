/**
 * Created by hehao on 15/8/2.
 */
var fs = require('fs');

exports.User = function () {
    this.mysql = require('mysql');
    this.connection = this.mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejs'
    });
    this.connection.connect();
};


exports.User.prototype.login = function (username, password,set_id) {
    var str =
        'SELECT * FROM user WHERE username="'
        + username + '"and password="' + password + '";';
    console.log(str);
    var id = -1;
    this.connection.query(str, function(error, results, fields) {
        if (results.length)
            set_id(results[0].user_id);
        else
            set_id(-1);
    });
};

exports.User.prototype.register = function (username, password) {
    var str =
        'INSERT INTO user VALUES(NULL, "' + username + '", "' + password + '");';
    console.log(str);
    this.connection.query(str);
};


exports.Blog = function () {
    this.sql = require('mysql');
    this.connection = this.sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejs'
    });
    this.connection.connect();
};


exports.Blog.prototype.register = function (username, password) {
    var str =
        'insert into user values (NULl,"' + username + '","' + password + '")';
    console.log(str);
    this.connection.query(str, function (error, results) {
        console.log(results)
    })
};

//exports.Blog.prototype.login = function (username, password) {
        //var str =
            //'SELECT * FROM user WHERE username="' + username + '" and password= "' + password + '"';
    //this.connection.query(str, function (error, results) {
        //if (error)
            //console.log(error);
        //else if (results == "" || results == null) {
            //req.session.error = '用户名或密码不正确';
        //}
        //else {
            //req.session.error = 'username';
            //console.log(results);
        //}
    //});
//};
exports.Blog.prototype.query = function (id) {
    var str =
        'SELECT * FROM blog WHERE id ="' + id + '";';
    console.log(str);
    this.connection.query(str, function (error, results) {
        console.log(results);
    });
};

exports.Blog.prototype.new_post = function (title, content) {

    var str =
        'INSERT INTO blog VALUES(NULL, "' + title + '", "' + content + '");';
    console.log(str);
    this.connection.query(str);
};


exports.Blog.prototype.edit = function (id, title, content) {
    var str =
        'UPDATE blog SET title="' + title + '", content="' + content + '"' + 'WHERE id=' + id + ';';
    console.log(str);
    this.connection.query(str);
};

exports.Blog.prototype.delete = function (id) {
    var str =
        'DELETE FROM blog WHERE id=' + id + ';';
    console.log(str);
    this.connection.query(str);
};
