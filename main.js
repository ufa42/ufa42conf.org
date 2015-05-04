
// allow to require react UI components
require("node-jsx").install({
	extension: ".jsx"
});

var virtual = require("./lib/virtual");
var serve = require("./lib/serve");
var argv = require("yargs").argv;
var RQ = require("./lib/rq");




var renderModelStep = require("./steps/renderModel");
var loadAssetsStep = require("./steps/loadAssets");
var loadModelStep = require("./steps/loadModel");

function finish() {
	if (argv.save) {
		virtual.exportTo("./build", function() {
			console.log("saved");
		});
	} else {
		serve(virtual.fs).listen(8080, function() {
			console.log("serving at http://localhost:8080");
		});
	}
}


RQ.parallel([
	RQ.sequence([
		loadModelStep,
		renderModelStep
	]),
	loadAssetsStep

])(finish);














// push to files for now
