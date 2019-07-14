const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
	const path = url.parse(req.url, true);

	if (path.pathname === '/') {
		fs.readFile('./index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	} else if (path.pathname === '/index') {
		fs.readFile('./index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	} else if (path.pathname === '/about') {
		fs.readFile('./about.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	} else if (path.pathname === '/contact_me') {
		fs.readFile('./contact_me.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	} else {
		fs.readFile('./404.html', function(err, data) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		})
	}
}).listen(8080);