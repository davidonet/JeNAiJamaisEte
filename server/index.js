var restify = require('restify');


server = restify.createServer();

var twit = require('./twit');

server.listen(5200, function() {
	console.log('%s listening at %s', server.name, server.url);
});
