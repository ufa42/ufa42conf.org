var path = require("path");
var virtual = require("../lib/virtual");

var RQ = require("../lib/rq");

function assets(callback) {

	virtual.copyFolder({
		root: path.resolve("./assets"),
		location: "/assets",
		sourceFs: require("fs"),
		targetFs: virtual.fs

	}, callback);
}


function slides(callback) {

	virtual.copyFolder({
		root: path.resolve("./conf"),
		location: "/conf",
		sourceFs: require("fs"),
		targetFs: virtual.fs

	}, callback);

}


module.exports = RQ.parallel([assets, slides]);
