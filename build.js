var db = require("./db");
var Site = require("./lib/Site");


var spec = {};


var site = Site.create(db, spec);
var render = require("./lib/render");
var urls = require("./lib/urls");


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
	var name = urls.getStaticFileName(url);
	files.push({
		name: name,
		html: html
	});
}


site.users.forEach(function(u) {
	build(ProfilePage, u.url, u);
});

site.conferences.forEach(function(conf) {
	build(ConferencePage, conf.url, conf);
});


build(HomePage, "/");