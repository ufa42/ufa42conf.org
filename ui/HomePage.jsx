/** @jsx React.DOM */

var React = require("react");
var ConferenceSummary = require("./ConferenceSummary");


var HomePage = React.createClass({
	propTypes: {
	},

	render: function render() {

		var conf = this.props.site.conferences[3];
		return (
			<div>
				<h1>Ho-ho</h1>
				<ConferenceSummary site={this.props.site}
								   item={conf}
								   />
			</div>
		);

	}
});

module.exports = HomePage;
