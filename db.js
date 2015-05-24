"use strict";


var team = require("./team/team.js");

var db = {
	places: [],
	conferences: []
};



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


function talk(title, description, speaker, slides, video) {
	if (speaker === undefined) {
		throw new Error("undefined speaker for " + title);
	}
	return {
		duration: 30,
		description: description,
		title: title,
		speaker: speaker,
		slides: slides,
		video: video
	};

}
function light(title, description, speaker, slides) {

	if (speaker === undefined) {
		throw new Error("undefined speaker for " + title);
	}
	return {
		duration: 5,
		description: description,
		title: title,
		speaker: speaker,
		slides: slides
	};
}





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
	if (!subj.date) {
		throw new Error("Conference date must be provided!");
	}
	subj.date = new Date(subj.date);

	db.conferences.push(subj);
}


conf({
	date: "2014-06-19",
	place: synergy,
	beers: duslyk,
	talks: [
		talk("Альфа версия сайта знакомств за 6 месяцев - работа над ошибками", "", team.rinat),
		talk("Почему мы используем Scala?", "", team.andrey),
		talk("HTTP слой со Spray и Akka", "", team.lev, "assets/talks/spray/spray-intro.html", "https://www.youtube.com/watch?v=JiR4sD8098w"),

		light("Emacs крут", "", team.rinat),
		light("Objective-C Runtime – вскрытие без наркоза", "", team.rishat),
		light("Как быстро написать приложение на angular.js? Не писать на angular.js", "", team.grisha),
		light("Нужно ли реализовывать жизненный цикл для данных?", "", team.anjei),
		light("Особенности интернационализации SPA (single page applications)", "", team.ruslan)
	]
});


conf({
	date: "2014-07-10",
	place: synergy,
	beers: duslyk,
	talks: [
		talk("Отладка распределенных систем", "", team.lev, "/assets/talks/dds/dds.html", "https://www.youtube.com/watch?v=zzlCvjkG6RE"),
		talk("5 Event-driven лайфхаков для вашего кода", "", team.rinat),

		light("Мобильное приложение для управления презентацией за 30 минут", "", team.rinat),
		light("Vim - в чем фишка", "", team.artem),
		light("iOS: не используйте Storyboard", "", team.rishat),
		light("Jira, тяжелая артиллерия энтерпрайза в стартапе", "", team.ksenia)
	]
});


conf({
	place: synergy,
	beers: gosti,
	date: "2015-02-25",
	talks: [
		talk("Cвет в конце тоннеля - ReactJS", "", team.rinat),
		talk("Переход с c* на riak", "", team.lev, "/assets/talks/migration/migration.html"),
		talk("Objective-C Runtime: немного теории и практическое применение", "", team.rishat, "assets/talks/swizzling.pdf"),

		light("Чем хорош Sikuli (кроме названия)", "", team.fil, "assets/talks/Sikuli.odp"),
		light("Из чего складывается user experience", "", team.oleg, "assets/talks/UX.ppt"),
		light("\"Hello World\" на микросхеме", "", team.rinat),
		light("Переход на cqrs и контекстное кэширование", "", team.lev, "assets/talks/cqrs/cqrs.html", "https://www.youtube.com/watch?v=cf2VzXOnSpc"),
		light("Доставить за 60 миллисекунд", "", team.sergey, "assets/talks/CDN.pdf")
	]
});

conf({
	place: synergy,
	beers: morris,
	date: "2015-04-27",
	talks: [
		talk("React Native глазами не iOS разработчика", "", team.rinat),
		talk("React Native глазами iOS разработчика", "", team.rishat),
		talk("Разработка Android-приложений на Scala", "", team.anjei),
		talk("Аутсорсинг разработки ПО", "", team.oleg),
		talk("TopCoder: риск - дело благородное", "", team.nikolay),
		talk("Apache Spark: как перестать беспокоиться и начать жить", "", team.lev),

		light("Телеметрия в .NET", "", team.rinat),
		light("“Секционирование” БД, как не надо делать", "", team.arsenij),
		light("Немного о средствах профилирования производительности в Chrome", "", team.ruslan)
	]

}


);

module.exports = db;
