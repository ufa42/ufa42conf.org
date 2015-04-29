var mock = require("mock-fs");
var fs = mock.fs({});
var path = require("path");
var mkdirp = require("mkdirp");
var readFiles = require("./walkFiles");

var logging = false;



function save(filepath, content, callback) {
	if (filepath === undefined || filepath.length === 0) {
		throw new Error("Filepath can't be empty");
	}

	if (filepath[0] !== "/") {
		throw new Error("Past must be rooted: " + filepath);
	}

	if (logging) {
		console.log("SAVE " + filepath);
	}

	if (fs.existsSync(filepath)) {
		throw new Error("overwriting existing file " + filepath);
	}

	var directory = path.dirname(filepath);
	mkdirp(directory, {
		fs: fs
	}, function(err) {
		if (err) {
			throw err;
		}
		fs.writeFile(filepath, content, function(err) {
			if (err) {
				throw err;
			}
			callback();
		});
	});
}

function importText(files, callback) {
	var jobs = files.length;

	console.time("importText");
	function complete(err) {
		if (err) {
			throw err;
		}
		jobs -= 1;
	}


	function wait(cb) {
		if (jobs === 0) {
			console.timeEnd("importText");
			cb();
			return;
		}
		setTimeout(function() {
			wait(cb);
		}, 100);
	}

	files.forEach(function(f) {
		save(f.path, f.text, complete);
	});

	wait(callback);



}

function importLocation(relative) {

	if (path.basename(relative) === ".DS_Store") {
		return undefined;
	}

	return relative;


}


function copyFolder(options, callback) {

	var root = options.root;
	var location = options.location;
	var targetFs = options.targetFs || fs;
	var sourceFs = options.sourceFs || require("fs");
	var filter = options.filter || importLocation;



	var finish = function(err, files) {
		if (err) {
			throw err;
		}
		callback(files);
	};
	var fileLoaded = function(err, content, filename, next) {
		if (err) {
			throw err;
		}

		var relative = path.relative(root, filename);
		var filtered = filter(relative);
		if (filtered === undefined) {
			next();
			return;
		}


		var target = path.join(location, filtered);
		var folder = path.dirname(target);

		if (targetFs.existsSync(target)) {
			throw new Error("overwriting " + target);
		}

		mkdirp(folder, {
			fs: targetFs
		}, function(err) {
			if (err) {
				throw err;
			}

			if (logging) {
				console.log("SAVE " + target);
			}

			targetFs.writeFile(target, content, function(err) {
				guard("writeFile", err);
				//console.log(target);
				next();
			});
		});
	};

	readFiles(root, {
		encoding: null,
		fs: sourceFs
	}, fileLoaded, finish);

}

function guard(name, err) {
	if (err) {
		var text = name + ": " + err.message;
		if (err.code !== undefined) {
			text += ". " + err.code;
		}

		var wrapper = new Error(text);
		wrapper.stack = err.stack;
		throw wrapper;
	}
}


function exportTo(loc, callback) {
	copyFolder({
		root: "/",
		location: path.resolve(loc),
		// from current mock
		sourceFs: fs,
		// to real system
		targetFs: require("fs")
	}, callback);
}

function log(value) {
	if (value === undefined) {
		logging = true;
	} else {
		logging = value;
	}
}

module.exports = {
	importText: importText,
	exportTo: exportTo,
	copyFolder: copyFolder

};

module.exports.write = save;
module.exports.fs = fs;
module.exports.log = log;
