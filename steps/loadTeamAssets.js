var virtual = require("../lib/virtual");
var path = require("path");

function loadTeamAssets(callback) {
	virtual.copyFolder({
		root: path.resolve("./team"),
		location: "/team",
		sourceFs: require("fs"),
		targetFs: virtual.fs
	}, callback);
}

module.exports = loadTeamAssets;
