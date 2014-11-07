var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');

var app = connect();

// some constants
var PORT = 3000;
var HOME_PAGE = 'example.html';

// start server
app.use(serveStatic('static', {'index': [HOME_PAGE]}));
app.use(serveStatic('bower_components', {'index': false}));
app.listen(3000);

// open browser
open('http://localhost:' + PORT + '/' + HOME_PAGE);
