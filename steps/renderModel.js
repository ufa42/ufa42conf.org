var urls = require("../lib/urls");
var virtual = require("../lib/virtual");

var React = require("react");

var UserPage = require("../ui/UserPage");
var HomePage = require("../ui/HomePage");
var ConferencePage = require("../ui/ConferencePage");
var NotFoundPage = require("../ui/NotFoundPage");
var TeamPage = require("../ui/TeamPage");


var files = [];

function renderPage(component, url, site, item) {

	var props = {
		site: site,
		item: item
	};
	var el = React.createElement(component, props);

	var out = React.renderToStaticMarkup(el);
	var html = "<!DOCTYPE html>" + out;

	files.push({
		path: urls.getStaticFileName(url),
		text: html
	});
}

function renderContent(callback, site) {

	site.users.forEach(function(u) {
		renderPage(UserPage, u.url, site, u);
	});

	site.conferences.forEach(function(conf) {
		renderPage(ConferencePage, conf.url, site, conf);
	});


	renderPage(HomePage, "/", site);
	renderPage(NotFoundPage, "/404.html", site);
	renderPage(TeamPage, "/team", site);


	virtual.importText(files, function() {
		callback(virtual);
	});
}


module.exports = renderContent;
