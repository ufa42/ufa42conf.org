var Site = require("../lib/Site");
var db = require("../db");

var team = require("../team/team.js");
var moment = require("moment");
var spec = {};


module.exports = function(callback) {

	var site = new Site();

	site.conferences = db.conferences;


	site.conferences.forEach(function(c) {
		c.url = "/conf/" + moment(c.date).format("YYYY-MM-DD") + "/";

		c.talks.forEach(function(talk, i) {

			talk.speaker.talks.push(talk);
			talk.date = c.date;
			talk.url = c.url + i + "/";


			if (talk.video && talk.video.indexOf("http") === -1) {
				talk.video = "https://www.youtube.com/watch?v=" + talk.video;
			}

			if (talk.slides) {
				talk.slides = c.url + talk.slides;
			}
		});
	});

	site.team = team;
	site.users = [];

	Object.keys(team).forEach(function(id) {
		site.users.push(team[id]);
	});

	callback(site);
};
