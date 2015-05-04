/** @jsx React.DOM */

var React = require("react");

var HtmlHead = React.createClass({
	propTypes: {

		//site: React.PropTypes.instanceOf(Site).isRequired,
		//title: React.PropTypes.string.isRequired,
		//description: React.PropTypes.string
	},

	render: function render() {
		var metas = [];

		if (this.props.description) {
			metas.push(<meta key="description"
							 name="description"
							 content={this.props.description} />);
		}

		return (
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{metas}
				<title>{ this.props.title }</title>
				<link rel="stylesheet" type="text/css" href="/assets/foundation.css" />

				<script src="/assets/modernizr.js"></script>
				<link rel="apple-touch-icon-precomposed"
					  href="/apple-touch-icon.png" />
				<link rel="shortcut icon"
					  href="/favicon.ico" />
			</head>
		);
	}

});


module.exports = HtmlHead;
