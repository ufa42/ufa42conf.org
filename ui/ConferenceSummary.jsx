/** @jsx React.DOM */

var React = require("react");
var TalkWidget = require("./TalkWidget");
var ConferenceSummary = React.createClass({
	propTypes: {
	},


	render: function render() {

		var conf = this.props.item;
		var site = this.props.site;

		var list = conf.talks.map(function(t) {
			return (<TalkWidget item={t} site={site} />);
		});
		return (
			<div>

				<p>Conference summary</p>
				{list}



			</div>
		);
	}
});


module.exports = ConferenceSummary;
