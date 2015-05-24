/** @jsx React.DOM */

var React = require("react");
var Avatar = require("./Avatar");
var DurationLabel = require("./DurationLabel");
var moment = require("moment");
var TalkLink = require("./TalkLink");
var ConferenceSummary = React.createClass({
	propTypes: {
	},



	renderTalk: function(talk) {
		var speaker = talk.speaker;

		return (


			<div className="row" style={{paddingTop:10}}>
				<div className="large-2 columns small-3">

					<Avatar user={speaker} size="70"/>
				</div>
				<div className="large-10 columns small-9">

					<a href={speaker.url}>{speaker.name}</a>
					<p>
						<TalkLink talk={talk} />
					</p>


				</div>
			</div>
		);
	},

	render: function render() {

		var conf = this.props.item;
		var site = this.props.site;
		var title = moment(conf.date).format("dddd, MMMM Do YYYY");
		var list = conf.talks.map(this.renderTalk);
		return (
			<article>
				<h3>{title}</h3>
				<div>
					{list}
				</div>




			</article>
		);
	}
});


module.exports = ConferenceSummary;
