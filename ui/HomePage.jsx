/** @jsx React.DOM */

var React = require("react");
var ConferenceSummary = require("./ConferenceSummary");
var FlatLayout = require("./FlatLayout");

var HomePage = React.createClass({
	propTypes: {
	},

	render: function render() {

		var conf = this.props.site.conferences[3];
		return (
			<FlatLayout>

				<h1>Ufa 42 Conference</h1>




			<div>
				<ConferenceSummary site={this.props.site}
								   item={conf}
								   />
			</div>


			</FlatLayout>
		);

	}
});

module.exports = HomePage;
