"use strict";

var db = {
	users: [],
	places: [],
	conferences: []
};


function user(id, twitter, name, photo) {
	var subj = {
		id: id,
		twitter: twitter,
		name: name,
		photo: photo
	};

	db.users.push(subj);
	return subj;
}

function place(title, lat, lon, address, description) {
	var subj = {
		title: title,
		latitude: lat,
		longitude: lon,
		address: address,
		description: description
	};
	return subj;
}


function talk(title, description, speaker, slides) {
	return {
		duration: 30,
		description: description,
		title: title,
		speaker: speaker,
		slides: slides
	};

}
function light(title, description, speaker, slides) {
	return {
		duration: 5,
		description: description,
		title: title,
		speaker: speaker,
		slides: slides
	};
}


var rinat = user("abdullin", "abdullin", "Rinat Abdullin", "http://pbs.twimg.com/profile_images/3479036762/40c99d96aa9a4e57cfa7d54d1fb7d5b2.jpeg");
var lev = user("levkhomich", "levkhomich", "Lev Khomich", "https://pbs.twimg.com/profile_images/459340276188708864/b3X4WwoB.png");
var andrey = user("andrey_feokt", "andrey_feokt", "Andrey Feoktistov", "https://pbs.twimg.com/profile_images/478884565369360384/RevpRhzK.png");
var rishat = user("MrDarK_AngeL", "MrDarK_AngeL", "Rishat Shamsutdinov", "https://pbs.twimg.com/profile_images/507544081548206080/VJTYy-dc_400x400.jpeg");
var grisha = user("grisha", undefined, "Grigory Leonenko", "https://pp.vk.me/c613522/v613522262/f295/WXWyojalNxo.jpg");
var anjei = user("anjei", undefined, "Anjei Katkov");
var ruslan = user("izuick", "izuick", "Ruslan Zuick", "https://pbs.twimg.com/profile_images/2181307609/IMG_10832.gif");
var artem = user("avpxalive", "avpxalive", "Artem Popov", "https://pbs.twimg.com/profile_images/2470048812/fee2031e43a59d4d4fd583b9b34aa4dc.jpeg");
var ksenia = user("akitka", "akitka", "Ksenia Makarova", "https://pbs.twimg.com/profile_images/476727113383297024/hJMp-Xxw.jpeg");
var fil = user("lozga", "lozga", "Filipp Terekhov", "https://pbs.twimg.com/profile_images/378800000802397697/a63d690bdef1a580e14ca4ee48fdc878_400x400.png");
var h3m0ptys1s = user("h3m0ptys1s", "h3m0ptys1s", "Oleg Gumerov", "https://pbs.twimg.com/profile_images/553508290261311489/EOUgvLll_400x400.jpeg");
var sergey = user("krasina15", "krasina15", "Sergey Tarasenko", "https://pbs.twimg.com/profile_images/915874529/f8376ccebd0220635cc7c8924804b120_400x400.png");
var nikolay = user("NikolayIakovlev", "NikolayIakovlev", "Nikolay Iakovlev", "https://pbs.twimg.com/profile_images/2159744451/appleStore.jpg");
var arsenij = user("arsenij", undefined, "Arsenij Imamutdinov", "http://s018.radikal.ru/i511/1504/b6/fb5100a0446a.jpg");




var synergy = place("ШБ Синергия", 54.7252452, 55.949416, "Уфа, ул. Коммунистическая, 54", "");
var duslyk = place("Дуслык", 54.7276034, 55.9494373, "Уфа, ул. Крупской, 9", "2 этаж");
var gosti = place("Гости", 54.719282, 55.949928, "Уфа, ул. Цюрупы, 12", "");
var morris = place("Morris", 54.728811, 55.941556, "Уфа, ул. Гоголя 60/1", "");



function conf(subj) {
	if (!subj.place) {
		throw new Error("Place must be defined");
	}
	if (!subj.beers) {
		throw new Error("Beers must be held!");
	}
	subj.date = new Date(subj.date);
	db.conferences.push(subj);
}


conf({
	date: "2014-06-19",
	place: synergy,
	beers: duslyk,
	talks: [
		talk("Альфа версия сайта знакомств за 6 месяцев - работа над ошибками", "", rinat),
		talk("Почему мы используем Scala?", "", andrey),
		talk("HTTP слой со Spray и Akka", "", lev, "assets/talks/spray/spray-intro.html"),

		light("Emacs крут", "", rinat),
		light("Objective-C Runtime – вскрытие без наркоза", "", rishat),
		light("Как быстро написать приложение на angular.js? Не писать на angular.js", "", grisha),
		light("Нужно ли реализовывать жизненный цикл для данных?", "", anjei),
		light("Особенности интернационализации SPA (single page applications)", "", ruslan)
	]
});


conf({
	date: "2014-07-10",
	place: synergy,
	beers: duslyk,
	talks: [
		talk("Отладка распределенных систем", "", lev, "assets/talks/dds/dds.html"),
		talk("5 Event-driven лайфхаков для вашего кода", "", rinat),

		light("Мобильное приложение для управления презентацией за 30 минут", "", rinat),
		light("Vim - в чем фишка", "", artem),
		light("iOS: не используйте Storyboard", "", rishat),
		light("Jira, тяжелая артиллерия энтерпрайза в стартапе", "", ksenia)
	]
});


conf({
	place: synergy,
	beers: gosti,
	date: "2015-02-25",
	talks: [
		talk("Cвет в конце тоннеля - ReactJS", "", rinat),
		talk("Переход с c* на riak", "", lev, "assets/talks/migration/migration.html"),
		talk("Objective-C Runtime: немного теории и практическое применение", "", rishat, "assets/talks/swizzling.pdf"),

		light("Чем хорош Sikuli (кроме названия)", "", fil, "assets/talks/Sikuli.odp"),
		light("Из чего складывается user experience", "", h3m0ptys1s, "assets/talks/UX.ppt"),
		light("\"Hello World\" на микросхеме", "", rinat),
		light("Переход на cqrs и контекстное кэширование", "", lev, "assets/talks/cqrs/cqrs.html"),
		light("Доставить за 60 миллисекунд", "", sergey, "assets/talks/CDN.pdf")
	]
});

conf({
	place: synergy,
	beers: morris,
	date: "2015-04-27",
	talks: [
		talk("React Native глазами не iOS разработчика", "", rinat),
		talk("React Native глазами iOS разработчика", "", rishat),
		talk("Разработка Android-приложений на Scala", "", anjei),
		talk("Аутсорсинг разработки ПО", "", h3m0ptys1s),
		talk("TopCoder: риск - дело благородное", "", nikolay),
		talk("Apache Spark: как перестать беспокоиться и начать жить", "", lev),

		light("Телеметрия в .NET", "", rinat),
		light("“Секционирование” БД, как не надо делать", "", arsenij),
		light("Немного о средствах профилирования производительности в Chrome", "", ruslan)
	]

}


);

module.exports = db;
