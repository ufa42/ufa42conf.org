/** @jsx React.DOM */

var React = require("react");

var AboutConferenceSection = React.createClass({
	propTypes: {
	},

	render: function render() {
		return (
		<article className="article-big">
			<div className="container">
				<h3>О чем эта конференция?</h3>
				<div className="big col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-mb-offset-1 col-lg-10 col-lg-offset-1">
					Мы говорим о производственной части проектов: делимся личным опытом решения задач,
					рассказываем про интересные особенности языков и технологий, про эпичные фейлы и
					красивые решения - в общем, конференция обо всем том, что мы особенно любим в своей работе
				</div>
			</div>
			<div className="container">
				<h3>Чего на ней не будет</h3>
				<div className="big col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-mb-offset-1 col-lg-10 col-lg-offset-1">
					<ul>
						<li>обзорных докладов про языки программирования или технологии. Ну разве что самую малость =);</li>
						<li>речей про фонды и инкубаторы, генерации идей для бизнеса;</li>
						<li>ура-мотивационных речей и размышлений о том, как заработать миллион долларов в интернете.</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<h3>Секции</h3>
				<div className="big col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-mb-offset-1 col-lg-10 col-lg-offset-1">
					В этот раз мы решили отойти от обычного формата с получасовыми докладами: вместо 2-3 длинных выступлений на 30 минут будет несколько докладов на 15-20 минут каждый.<br />
					Пятиминутки - lightning talks - остаются отдельной секцией. Здесь задача докладчика - высказаться кратко и ёмко на интересную тему; вопросы из зала не предусмотрены: все обсуждения - после конференции.<br />
					Самые интересные обсуждения начинаются во второй части! Можно будет организованно попить пива/чаю/сока в близлежащем кафе и поговорить о том, что осталось за рамками докладов.
				</div>
			</div>
		</article>
		);
	}
});


module.exports = AboutConferenceSection;
