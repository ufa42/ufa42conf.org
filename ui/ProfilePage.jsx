/** @jsx React.DOM */

var React = require("react");

var Layout = require("./FlatLayout");

var ProfilePage = React.createClass({
	propTypes: {
	},

	render: function render() {


		var user = this.props.item;
		return (
			<Layout>
				<h1>{user.name}</h1>

				<img src={user.photo} width="100" height="100"/>


			</Layout>
		);
	}
});


module.exports = ProfilePage;
