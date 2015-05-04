var Site = require("../lib/Site");
var db = require("../db");

var team = require("../team/team.js");

var spec = {};



module.exports = function(callback) {

	var site = new Site();

	site.conferences = db.conferences;


	site.conferences.forEach(function(c) {
		c.url = "/conf/" + c.date + "/";
		c.talks.forEach(function(talk) {
			talk.speaker.talks.push(talk);
			talk.date = c.date;
		});
	});

	site.team = team;
	site.users = [];

	Object.keys(team).forEach(function(id) {
		site.users.push(team[id]);
	});





	callback(site);


};
