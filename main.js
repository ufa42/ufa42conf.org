var db = require("./db");
var Site = require("./lib/Site");


var spec = {};


var site = Site.create(db, spec);
var render = require("./lib/render");
var urls = require("./lib/urls");
var virtual = require("./lib/virtual");
var serve = require("./lib/serve");
var argv = require("yargs").argv;



// allow to require react UI components
require("node-jsx").install({
	extension: ".jsx"
});


var ProfilePage = require("./ui/ProfilePage");
var HomePage = require("./ui/HomePage");
var ConferencePage = require("./ui/ConferencePage");

var files = [];

function build(component, url, item) {
	var html = render.component(component, {
		site: site,
		item: item
	});
	files.push({
		path: urls.getStaticFileName(url),
		text: html
	});
}


site.users.forEach(function(u) {
	build(ProfilePage, u.url, u);
});

site.conferences.forEach(function(conf) {
	build(ConferencePage, conf.url, conf);
});


build(HomePage, "/");



virtual.importText(files, function() {


	if (argv.save) {

		virtual.exportTo("./build", function() {
			console.log("saved");
		});
		return;
	}
	serve(virtual.fs).listen(8080, function() {
		console.log("serving at http://localhost:8080");
	});

});








// push to files for now
