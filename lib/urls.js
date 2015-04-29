var path = require("path");


function getStaticFileName(target) {
	var endsWithSlash = target[target.length - 1] === "/";
	if (endsWithSlash) {
		return target + "index.html";
	}

	var base = path.basename(target);
	if (base === "index.html") {
		return target;
	}
	var ext = path.extname(target);
	if (ext !== "") {
		throw new Error("unexpected extension " + ext + " on " + target);
	}
	return path.join(target, "index.html");
}


module.exports = {
	getStaticFileName: getStaticFileName
};
