/** @jsx React.DOM */

var React = require("react");
var ConferenceSummary = React.createClass({
	propTypes: {
	},


	renderTalk: function(talk) {
		var speaker = talk.speaker;
		return (
			<div className="columns large-12">
				<div className="row">
					<div className="columns large-3">

						<img src={speaker.photo} width="100" height="100"/>
					</div>
					<div className="columns large-9">

						<a href={speaker.url}>{speaker.name}</a>
						<p>{talk.title}</p>
					</div>
				</div>

			<hr />


			</div>
		);
	},

	render: function render() {

		var conf = this.props.item;
		var site = this.props.site;

		var list = conf.talks.map(this.renderTalk);
		return (
			<div className="row">

				{list}



			</div>
		);
	}
});


module.exports = ConferenceSummary;
