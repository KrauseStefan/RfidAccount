var restify = require('restify');



var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

exports.start = function(port){
	server.listen(port, function () {
	  console.log('%s listening at %s', server.name, server.url);
	});
}

exports.getServerObj = function(){
	return server;
}

