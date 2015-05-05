var team = {};

function user(spec) {

	if (spec.id === undefined) {
		throw new Error("id must be defined");
	}
	if (spec.name === undefined) {
		throw new Error("name must be defined");
	}


	var member = {
		id: spec.id,
		twitter: spec.twitter,
		name: spec.name,
		photo: spec.photo,
		talks: []
	};

	member.url = "/team/" + spec.id + "/";
	team[member.id] = member;
}

user({
	id: "rinat",
	name: "Rinat Abdullin",
	twitter: "abdullin",
	photo: "/team/rinat.jpeg"
});

user({
	id: "lev",
	name: "Lev Khomich",
	twitter: "levkhomich",
	photo: "/team/lev.png",
});

user({
	id: "andrey",
	name: "Andrey Feoktistov",
	twitter: "andrey_feokt",
	photo: "/team/andrey.png",
});

user({
	id: "rishat",
	name: "Rishat Shamsutdinov",
	twitter: "MrDarK_AngeL",
	photo: "/team/rishat.jpeg",
});
user({
	id: "grisha",
	name: "Grigory Leonenko",
	photo: "/team/grisha.jpg",
});
user({
	id: "anjei",
	name: "Anjei Katkov",
});
user({
	id: "ruslan",
	name: "Ruslan Zuick",
	twitter: "izuick",
	photo: "/team/ruslan.gif",
});
user({
	id: "artem",
	name: "Artem Popov",
	twitter: "avpxalive",
	photo: "/team/artem.jpeg"
});
user({
	id: "ksenia",
	name: "Ksenia Makarova",
	twitter: "akitka",
	photo: "/team/ksenia.jpeg",
});
user({
	id: "fil",
	name: "Filipp Terekhov",
	twitter: "lozga",
	photo: "/team/fil.png"
});
user({
	id: "oleg",
	photo: "/team/oleg.jpeg",
	name: "Oleg Gumerov",
	twitter: "h3m0ptys1s",
});
user({
	id: "sergey",
	name: "Sergey Tarasenko",
	twitter: "krasina15",
	photo: "/team/sergey.png",
});
user({
	id: "nikolay",
	name: "Nikolay Iakovlev",
	twitter: "NikolayIakovlev",
	photo: "/team/nikolay.jpg",
});
user({
	id: "arsenij",
	name: "Arsenij Imamutdinov",
	photo: "/team/arsenij.jpg",
});



module.exports = team;
