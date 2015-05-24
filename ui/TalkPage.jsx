/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var TalkPage = React.createClass({
	propTypes: {
	},

	render: function render() {
		var talk = this.props.item;


		return (


			<FlatLayout>

				<h1>{talk.title}</h1>
				<div className="row">


				</div>



			</FlatLayout>
		);
	}
});


module.exports = TalkPage;
