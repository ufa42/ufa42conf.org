var virtual = require("../lib/virtual");

module.exports = function(callback) {

	virtual.exportTo("./build", function() {
		console.log("export complete");
		callback();
	});
};
