var path = require("path");
var virtual = require("../lib/virtual");


function assets(callback) {
	var root = path.resolve("./assets");

	virtual.copyFolder({
		root: root,
		location: "/assets",
		sourceFs: require("fs"),
		targetFs: virtual.fs

	}, callback);
}


module.exports = assets;
