
var Site = require("../lib/Site");
var db = require("../db");

var spec = {};



module.exports = function(callback) {

	var site = Site.create(db, spec);
	callback(site);


};
