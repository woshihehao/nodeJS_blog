var models = require('./models');
var i;
var blogs=models.load_blogs();
for (i=0;i<=100000;i++){
    models.query_title(blogs,Math.floor(Math.random()*1000000));
}
