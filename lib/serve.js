"use strict";

var http = require("http");
var url = require("url");
var path = require("path");

var mime = require("mime");


// we pretend to be amazon S3 server
function init(fs, notFoundUrl) {
	var handler = function(request, response) {


		var filename = url.parse(request.url).pathname;
		console.log("GET: " + filename);

		var servePath = function servePath(filename) {
			if (!filename) {
				throw new Error("empty filename in request " + request.url);
			}

			fs.stat(filename, function(err, stat) {
				if (err) {
					console.log("404:" + filename);
					if (filename !== notFoundUrl) {
						servePath(notFoundUrl);
						return;
					}
					response.writeHead(404, {
						"Content-Type": "text/plain"
					});
					response.write("404 Not Found\n");
					response.end();

					return;
				}

				if (stat.isDirectory()) {
					var newPath = path.join(filename, "index.html");
					servePath(newPath);
					return;
				}

				fs.readFile(filename, function(err, data) {

					if (err) {
						response.writeHead(500);
						response.write("500 " + err.code);
						response.end();
						return;
					}

					var content = mime.lookup(filename);
					response.writeHead(200, {
						"Content-Type": content
					});
					response.write(data, "binary");
					response.end();
				});

			});
		};

		servePath(filename);




	};

	return http.createServer(handler);
}

module.exports = init;
