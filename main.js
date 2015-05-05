// allow to require react UI components
require("node-jsx").install({
	extension: ".jsx"
});

var argv = require("yargs").argv;
var RQ = require("./lib/rq");

var site;
function memoize(callback, s) {
	site = s;
	callback(site);
}
function recover(callback) {
	callback(site);
}
function complete() {
	console.log("Done");
}

var output = argv.save
	? require("./steps/export")
	: require("./steps/serve");


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
	]),
	output
])(complete);




// push to files for now
