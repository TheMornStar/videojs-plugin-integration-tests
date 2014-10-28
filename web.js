var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('static', {'index': ['example.html']}));
app.use(serveStatic('bower_components', {'index': false}));
app.listen(3000);
