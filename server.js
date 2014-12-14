var static = require('node-static'),
	file = new static.Server('.');

require('http').createServer(function (req, res) {
	req.addListener('end', function () {
		file.serve(req, res);
	}).resume();
}).listen(8080);