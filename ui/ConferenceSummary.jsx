/** @jsx React.DOM */

var React = require("react");
var Avatar = require("./Avatar");
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
					<p>{talk.title}</p>
				</div>
			</div>
		);
	},

	render: function render() {

		var conf = this.props.item;
		var site = this.props.site;

		var list = conf.talks.map(this.renderTalk);
		return (
			<article>

				{list}



			</article>
		);
	}
});


module.exports = ConferenceSummary;
