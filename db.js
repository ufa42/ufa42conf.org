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

function ensure(subj, names) {
	names.forEach(function(name) {
		if (subj[name] === undefined) {
			throw new Error("Field " + name + " must be provided");
		}
	});
}

// use this version instead of the talk/light
function talk(spec) {
	ensure(spec, ["speaker", "title", "duration"]);
	return spec;
}

var synergy = place("ШБ Синергия", 54.7252452, 55.949416, "Уфа, ул. Коммунистическая, 54", "");
var duslyk = place("Дуслык", 54.7276034, 55.9494373, "Уфа, ул. Крупской, 9", "2 этаж");
var gosti = place("Гости", 54.719282, 55.949928, "Уфа, ул. Цюрупы, 12", "");
var morris = place("Morris", 54.728811, 55.941556, "Уфа, ул. Гоголя 60/1", "");


function conf(subj) {
	ensure(subj, ["place", "beers", "date"]);


	if (subj.title === undefined) {
		subj.title = subj.date;
	}

	subj.date = new Date(subj.date);

	db.conferences.push(subj);
}

conf({
	date: "2014-06-19",
	place: synergy,
	beers: duslyk,
	talks: [

		talk({
			speaker: team.rinat,
			title: "Альфа версия сайта знакомств за 6 месяцев - работа над ошибками",
			duration: 30,
			slides: "rinat-hpc.pdf",
			video: "L6hXbj--Ojc"
		}),
		talk({
			speaker: team.andrey,
			title: "Почему мы используем Scala?",
			duration: 30,
			video: "J6V2lY0Zcyw"
		}),
		talk({
			speaker: team.lev,
			title: "HTTP слой со Spray и Akka",
			duration: 30,
			slides: "lev-spray/spray-intro.html",
			video: "JiR4sD8098w"
		}),
		talk({
			speaker: team.rinat,
			title: "Emacs крут",
			duration: 5
		}),
		talk({
			speaker: team.rishat,
			title: "Objective-C Runtime – вскрытие без наркоза",
			duration: 5
		}),
		talk({
			speaker: team.grisha,
			title: "Как быстро написать приложение на angular.js? Не писать на angular.js",
			duration: 5
		}),
		talk({
			speaker: team.anjei,
			title: "Нужно ли реализовывать жизненный цикл для данных?",
			duration: 5
		}),
		talk({
			speaker: team.ruslan,
			title: "Особенности интернационализации SPA (single page applications)",
			duration: 5
		})

	]
});


conf({
	date: "2014-07-10",
	place: synergy,
	beers: duslyk,
	talks: [

		talk({
			speaker: team.lev,
			title: "Отладка распределенных систем",
			duration: 30,
			slides: "lev-dds/dds.html",
			video: "zzlCvjkG6RE"
		}),
		talk({
			speaker: team.rinat,
			title: "5 Event-driven лайфхаков для вашего кода",
			duration: 30,
			slides: "rinat-edd-lifehacks.pdf",
			video: "VKRgjxqCSqY"
		}),
		talk({
			speaker: team.rinat,
			title: "Мобильное приложение для управления презентацией за 30 минут",
			duration: 5,
			slides: "rinat-talker.pdf"
		}),
		talk({
			speaker: team.artem,
			title: "Vim - в чем фишка",
			duration: 5,
			video: "dARZ5bosMr4"
		}),
		talk({
			speaker: team.rishat,
			title: "iOS: не используйте Storyboard",
			duration: 5,
			video: "e-uGkkdCaO8"
		}),
		talk({
			speaker: team.sergey,
			title: "DevOps: слабоумие и отвага",
			duration: 5,
			video: "ubD8k_GFCpI"
		}),
		talk({
			speaker: team.ksenia,
			title: "Jira, тяжелая артиллерия энтерпрайза в стартапе",
			duration: 5,
			video: "aDjh0FJOKIQ"
		}),
		talk({
			speaker: team.marat,
			title: "Как обсуждать технические моменты с нетехническими коллегами",
			duration: 5,
			video: "TkKBc-t38M0"
		})
	]
});


conf({
	place: synergy,
	beers: gosti,
	date: "2015-02-25",
	talks: [
		talk({
			speaker: team.rinat,
			title: "Cвет в конце тоннеля - ReactJS",
			duration: 30,
			slides: "rinat-react-js.pdf",
			video: "TQb6kBUrLZs"
		}),
		talk({
			speaker: team.lev,
			title: "Переход с c* на riak",
			duration: 30,
			slides: "lev-migration/migration.html"
		}),
		talk({
			speaker: team.rishat,
			title: "Objective-C Runtime: немного теории и практическое применение",
			duration: 30,
			slides: "rishat-swizzling.pdf",
			video: "KmhOYSoxdYA"
		}),
		talk({
			speaker: team.fil,
			title: "Чем хорош Sikuli (кроме названия)",
			duration: 5,
			slides: "fil-sikuli.odp",
			video: "8_qWxXuae_Y"
		}),
		talk({
			speaker: team.oleg,
			title: "Из чего складывается user experience",
			duration: 5,
			slides: "oleg-ux.ppt",
			video: "nSIMdlDGq1Q"
		}),
		talk({
			speaker: team.rinat,
			title: "\"Hello World\" на микросхеме",
			duration: 5
		}),
		talk({
			speaker: team.lev,
			title: "Переход на cqrs и контекстное кэширование",
			duration: 5,
			slides: "lev-cqrs/cqrs.html",
			video: "cf2VzXOnSpc"
		}),
		talk({
			speaker: team.sergey,
			title: "Доставить за 60 миллисекунд",
			duration: 5,
			slides: "sergey-cdn.pdf",
			video: "EfAEHsjpx8o"
		})

	]
});

conf({
	place: synergy,
	beers: morris,
	date: "2015-04-27",
	talks: [

		talk({
			speaker: team.rinat,
			title: "React Native глазами не iOS разработчика",
			duration: 30,
			slides: "rinat-react-native.pdf",
			video: "tl2oI5oHgQw"
		}),
		talk({
			speaker: team.rishat,
			title: "React Native глазами iOS разработчика",
			duration: 30,
			slides: "rishat-react-native.pdf"
		}),
		talk({
			speaker: team.anjei,
			title: "Разработка Android-приложений на Scala",
			duration: 30,
			slides: "anjei-scala.pdf"
		}),
		talk({
			speaker: team.oleg,
			title: "Аутсорсинг разработки ПО",
			duration: 30,
			slides: "oleg-outsourcing.pdf",
			video: "CRp6ARy0nzY"
		}),
		talk({
			speaker: team.nikolay,
			title: "TopCoder: риск - дело благородное",
			duration: 30,
			slides: "nikolay-topcoder.pdf",
			video: "zESzBfIg0wM"
		}),
		talk({
			speaker: team.lev,
			title: "Apache Spark: как перестать беспокоиться и начать жить",
			duration: 30,
			slides: "lev-spark/spark.html",
			video: "kpBvnhD-l4A"
		}),
		talk({
			speaker: team.rinat,
			title: "Телеметрия в .NET",
			duration: 5,
			slides: "rinat-telemetry.pdf",
			video: "9PC1SaA-QjY"
		}),
		talk({
			speaker: team.arsenij,
			title: "“Секционирование” БД, как не надо делать",
			duration: 5,
			video: "KnRvn4zJLW0"
		}),
		talk({
			speaker: team.ruslan,
			title: "Немного о средствах профилирования производительности в Chrome",
			duration: 5,
			slides: "ruslan-chrome-profiling.pdf",
			video: "VtNDVjfB7cE"
		})
	]

}


);

module.exports = db;
