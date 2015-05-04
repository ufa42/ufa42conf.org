// Site is declared as Class to allow validating UI components
function Site() {
}


function index(site) {

	site.users.forEach(function(u) {
		u.url = "/user/" + u.id + "/";
		u.talks = [];
	});

	site.conferences.forEach(function(c) {
		c.url = "/conf/" + c.date + "/";
		c.talks.forEach(function(talk) {
			talk.speaker.talks.push(talk);
			talk.date = c.date;
		});
	});

}



Site.create = function(db, spec) {
	var site = new Site();

	site.users = db.users;
	site.conferences = db.conferences;


	index(site);

	return site;
};


module.exports = Site;
