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
	originalAvatar: "http://pbs.twimg.com/profile_images/3479036762/40c99d96aa9a4e57cfa7d54d1fb7d5b2.jpeg",
	photo: "/team/rinat.jpeg"
});

user({
	id: "lev",
	name: "Lev Khomich",
	twitter: "levkhomich",
	photo: "/team/lev.png",
	originalAvatar: "https://pbs.twimg.com/profile_images/459340276188708864/b3X4WwoB.png",
});

user({
	id: "andrey",
	name: "Andrey Feoktistov",
	twitter: "andrey_feokt",
	photo: "/team/andrey.png",
	originalAvatar: "https://pbs.twimg.com/profile_images/478884565369360384/RevpRhzK.png",
});

user({
	id: "rishat",
	name: "Rishat Shamsutdinov",
	twitter: "MrDarK_AngeL",
	photo: "/team/rishat.jpeg",
	originalAvatar: "https://pbs.twimg.com/profile_images/507544081548206080/VJTYy-dc_400x400.jpeg",
});
user({
	id: "grisha",
	name: "Grigory Leonenko",
	originalAvatar: "https://pp.vk.me/c613522/v613522262/f295/WXWyojalNxo.jpg",
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
	originalAvatar: "https://pbs.twimg.com/profile_images/2181307609/IMG_10832.gif",
});
user({
	id: "artem",
	name: "Artem Popov",
	twitter: "avpxalive",
	originalAvatar: "https://pbs.twimg.com/profile_images/2470048812/fee2031e43a59d4d4fd583b9b34aa4dc.jpeg",
	photo: "/team/artem.jpeg"
});
user({
	id: "ksenia",
	name: "Ksenia Makarova",
	twitter: "akitka",
	photo: "/team/ksenia.jpeg",
	originalAvatar: "https://pbs.twimg.com/profile_images/476727113383297024/hJMp-Xxw.jpeg",
});
user({
	id: "fil",
	name: "Filipp Terekhov",
	twitter: "lozga",
	originalAvatar: "https://pbs.twimg.com/profile_images/378800000802397697/a63d690bdef1a580e14ca4ee48fdc878_400x400.png",
	photo: "/team/fil.png"
});
user({
	id: "oleg",
	photo: "/team/oleg.jpeg",
	name: "Oleg Gumerov",
	twitter: "h3m0ptys1s",
	originalAvatar: "https://pbs.twimg.com/profile_images/553508290261311489/EOUgvLll_400x400.jpeg",
});
user({
	id: "sergey",
	name: "Sergey Tarasenko",
	twitter: "krasina15",
	photo: "/team/sergey.png",
	originalAvatar: "https://pbs.twimg.com/profile_images/915874529/f8376ccebd0220635cc7c8924804b120_400x400.png",
});
user({
	id: "nikolay",
	name: "Nikolay Iakovlev",
	twitter: "NikolayIakovlev",
	photo: "/team/nikolay.jpg",
	originalAvatar: "https://pbs.twimg.com/profile_images/2159744451/appleStore.jpg",
});
user({
	id: "arsenij",
	name: "Arsenij Imamutdinov",
	photo: "/team/arsenij.jpg",
	originalAvatar: "http://s018.radikal.ru/i511/1504/b6/fb5100a0446a.jpg",
});



module.exports = team;
