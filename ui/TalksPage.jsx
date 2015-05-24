/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var ConferenceSummary = require("./ConferenceSummary");

var TalkPage = React.createClass({
	propTypes: {
	},

	render: function render() {
		var site = this.props.site;

		var items = site.conferences.map(function(c) { return (
<ConferenceSummary site={site} item={c} />)});


		return (


			<FlatLayout>
				<h1>Talks</h1>

				<div className="row">
					<div className="columns large-10 large-1-offset">
					{items}
</div>



				</div>



			</FlatLayout>
		);
	}
});


module.exports = TalkPage;
