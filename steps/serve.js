var virtual = require("../lib/virtual");

var serve = require("../lib/serve");

module.exports = function(callback) {
	serve(virtual.fs, "404.html").listen(8080, function() {
		console.log("serving at http://localhost:8080");
		callback();
	});
};
