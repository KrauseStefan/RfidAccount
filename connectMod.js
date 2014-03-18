var connect = require('connect');
var restifyMod = require('./restifyMod.js');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

// Connect config here
var connectApp = connect()
    .use(connect.logger())
    .use(connect.bodyParser())
    .use(connect.query())
    .use(connect.cookieParser())
    .use(serveStatic('app', {'index': 'index.html'}))
    // .use(serveIndex('app', {'icons': true}))
    // And this is where the magic happens
    .use("/api", function (req, res) {
    		var restServer = restifyMod.getServerObj();
             restServer.server.emit('request', req, res);
         });

exports.start = function(port){
	connectApp.listen(port);
}
