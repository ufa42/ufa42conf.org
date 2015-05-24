var virtual = require("../lib/virtual");
var path = require("path");
var gm = require("gm");
var RQ = require("../lib/rq");

var mkdirp = require("mkdirp");


function guard(err) {
	if (err) {
		throw err;
	}
}

function createTeamFolder(callback, site) {

	mkdirp("/regen/", {
		fs: virtual.fs
	}, function(err) {
		guard(err);
		callback(site);
	});
}

function loadTeamPhotos(callback, site) {

	virtual.copyFolder({
		root: path.resolve("./team"),
		location: "/team",
		sourceFs: require("fs"),
		targetFs: virtual.fs

	}, function() {
		//guard(err);
		callback(site);
	});
}


function makeThumbnails(source, target) {

	var buf = virtual.fs.readFileSync(source);

	Object.keys(target).forEach(function(size) {
		var targetPath = target[size];


		gm(buf, source)
			.options({
				imageMagick: true
			})
			.resize("" + size + "^", "" + size + "^")
			.gravity()
			.crop(size, size)
			.toBuffer("jpg", function(err, buffer) {
				guard(err);
				virtual.fs.writeFileSync(targetPath, buffer);
			});

	});

}

function loadTeamAssets(callback, site) {

	// make default
	var unknown = {
		"140": "/team/unknown_140.jpg",
		"400": "/team/unknown_400.jpg"
	};
	makeThumbnails("/team/unknown.jpg", unknown);



	site.users.forEach(function(m) {
		if (!m.photo) {
			m.avatar = unknown;
			return;
		}

		var ext = path.extname(m.photo);
		var name = path.basename(m.photo, ext);


		m.avatar = {
			"140": "/team/" + name + "_140.jpg",
			"400": "/team/" + name + "_400.jpg"
		};
		makeThumbnails(m.photo, m.avatar);
	});

	callback();
}

module.exports = RQ.sequence([
	loadTeamPhotos,
	loadTeamAssets,
]);
