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
function light(title, description, speaker, slides, video) {

	if (speaker === undefined) {
		throw new Error("undefined speaker for " + title);
	}
	return {
		duration: 5,
		description: description,
		title: title,
		speaker: speaker,
		slides: slides,
		video: video

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
		talk("Альфа версия сайта знакомств за 6 месяцев - работа над ошибками", "", team.rinat, "rinat-hpc.pdf", "L6hXbj--Ojc"),
		talk("Почему мы используем Scala?", "", team.andrey, undefined, "J6V2lY0Zcyw"),
		talk("HTTP слой со Spray и Akka", "", team.lev, "lev-spray/spray-intro.html", "JiR4sD8098w"),

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
		talk("Отладка распределенных систем", "", team.lev, "lev-dds/dds.html", "zzlCvjkG6RE"),
		talk("5 Event-driven лайфхаков для вашего кода", "", team.rinat, "rinat-edd-lifehacks.pdf", "VKRgjxqCSqY"),

		light("Мобильное приложение для управления презентацией за 30 минут", "", team.rinat, "rinat-presenter.pdf"),
		light("Vim - в чем фишка", "", team.artem, "dARZ5bosMr4"),
		light("iOS: не используйте Storyboard", "", team.rishat, "e-uGkkdCaO8"),
		light("DevOps: слабоумие и отвага", "", team.sergey, "ubD8k_GFCpI"),
		light("Jira, тяжелая артиллерия энтерпрайза в стартапе", "", team.ksenia, undefined, "aDjh0FJOKIQ"),
		light("Как обсуждать технические моменты с нетехническими коллегами", "", team.marat, undefined, "TkKBc-t38M0")
	]
});


conf({
	place: synergy,
	beers: gosti,
	date: "2015-02-25",
	talks: [
		talk("Cвет в конце тоннеля - ReactJS", "", team.rinat, "rinat-react-js.pdf", "TQb6kBUrLZs"),
		talk("Переход с c* на riak", "", team.lev, "lev-migration/migration.html"),
		talk("Objective-C Runtime: немного теории и практическое применение", "", team.rishat, "rishat-swizzling.pdf", "KmhOYSoxdYA"),

		light("Чем хорош Sikuli (кроме названия)", "", team.fil, "fil-sikuli.odp", "8_qWxXuae_Y"),
		light("Из чего складывается user experience", "", team.oleg, "oleg-ux.ppt", "nSIMdlDGq1Q"),
		light("\"Hello World\" на микросхеме", "", team.rinat),
		light("Переход на cqrs и контекстное кэширование", "", team.lev, "lev-cqrs/cqrs.html", "cf2VzXOnSpc"),
		light("Доставить за 60 миллисекунд", "", team.sergey, "sergey-cdn.pdf", "EfAEHsjpx8o")
	]
});

conf({
	place: synergy,
	beers: morris,
	date: "2015-04-27",
	talks: [
		talk("React Native глазами не iOS разработчика", "", team.rinat, "rinat-react-native.pdf", "tl2oI5oHgQw"),
		talk("React Native глазами iOS разработчика", "", team.rishat, "rishat-react-native.pdf"),
		talk("Разработка Android-приложений на Scala", "", team.anjei, "anjei-scala.pdf"),
		talk("Аутсорсинг разработки ПО", "", team.oleg, "oleg-outsourcing.pdf", "CRp6ARy0nzY"),
		talk("TopCoder: риск - дело благородное", "", team.nikolay, "nikolay-topcoder.pdf", "zESzBfIg0wM"),
		talk("Apache Spark: как перестать беспокоиться и начать жить", "", team.lev, undefined, "kpBvnhD-l4A"),

		light("Телеметрия в .NET", "", team.rinat, "rinat-telemetry.pdf", "9PC1SaA-QjY"),
		light("“Секционирование” БД, как не надо делать", "", team.arsenij, undefined, "KnRvn4zJLW0"),
		light("Немного о средствах профилирования производительности в Chrome", "", team.ruslan, "ruslan-chrome-profiling.pdf", "VtNDVjfB7cE")
	]

}


);

module.exports = db;
