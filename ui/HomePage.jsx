/** @jsx React.DOM */

var React = require("react");
var ConferenceSummary = require("./ConferenceSummary");
var AboutConferenceWidget = require("./AboutConferenceWidget");
var FlatLayout = require("./FlatLayout");

var HomePage = React.createClass({
	propTypes: {
	},

	render: function render() {

		var conf = this.props.site.conferences[3];
		return (
			<FlatLayout title="Ufa42 Conference">

				<h1>Ufa42 Conference</h1>

				<div className="row">
					<div className="large-8 large-offset-2 columns">

						<ConferenceSummary site={this.props.site}
										   item={conf}
										   />
						<hr />
						<AboutConferenceWidget />
					</div>
				</div>
			</FlatLayout>
		);
	}
});

module.exports = HomePage;
