/** @jsx React.DOM */

var React = require("react");

var HtmlHead = require("./HtmlHead");

var FlatLayout = React.createClass({
	propTypes: {
	},

	render: function render() {
		return (

			<html lang="en">
				<HtmlHead title={this.props.title} site={this.props.site} description={this.props.description} />
				<body>
					<div className="page">
						{this.props.children}
					</div>
					<div className="copyright">2015-Present &copy; Ufa42 Team</div>
				</body>
			</html>
		);
	}
});


module.exports = FlatLayout;
