var path = require("path");
var virtual = require("../lib/virtual");


function assets(callback) {

	virtual.copyFolder({
		root: path.resolve("./assets"),
		location: "/assets",
		sourceFs: require("fs"),
		targetFs: virtual.fs

	}, callback);
}


module.exports = assets;
