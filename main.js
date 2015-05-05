// allow to require react UI components
require("node-jsx").install({
	extension: ".jsx"
});

var virtual = require("./lib/virtual");
var serve = require("./lib/serve");
var argv = require("yargs").argv;
var RQ = require("./lib/rq");


var loadModelStep = require("./steps/loadModel");
var renderModelStep = require("./steps/renderModel");
var loadAssetsStep = require("./steps/loadAssets");

function finish() {
	if (argv.save) {
		virtual.exportTo("./build", function() {
			console.log("saved");
		});
	} else {
		serve(virtual.fs, "404.html").listen(8080, function() {
			console.log("serving at http://localhost:8080");
		});
	}
}




var site;
function memoize(callback, s) {
	site = s;
	callback(site);
}
function recover(callback) {
	callback(site);
}


RQ.sequence([
	require("./steps/loadModel"),
	memoize,
	RQ.parallel([
		require("./steps/loadAssets"),
		require("./steps/loadTeamAssets")
	]),
	recover,
	RQ.parallel([
		require("./steps/renderModel")
	])
])(finish);




// push to files for now
