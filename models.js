/**
 * Created by hehao on 15/8/2.
 */
var fs = require('fs');
module.exports = {
    query_title: function (blogs,id) {

        if (id>blogs.next_id){
            return null
        }
        for (var i = 0; i < blogs.articles.length; i++) {
            if (blogs.articles[i].id == id) {
                return blogs.articles[i];
            }
        }
        return null;
    },

    add_blog: function (blogs, title, body) {

        blogs.next_id += 1;
        var blog = {
            id: blogs.next_id,
            title: title,
            body: body
        };
        blogs.articles.push(blog);
    },

    load_blogs: function () {
        var json_string = fs.readFileSync('blog.json').toString();//单线程读出，
        var blogs = eval('(' + json_string + ')');//将读出的字符串转化为对象
        return blogs;
    },

    store_blogs:function(blogs){
        fs.writeFileSync("blog.json", JSON.stringify(blogs));//单线程写入，将blogs对象转化为字符串
    }
};
