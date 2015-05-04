/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var TeamPage = React.createClass({
	propTypes: {
	},

	renderUser: function(user) {
		return (
			<div className="large-2 small-3 columns">
				<img src={user.photo} height="100" width="100"/>
				<div className="panel">
					<a href={user.url}>{user.name}</a>
				</div>
			</div>

		);

	},

	render: function render() {
		var users = this.props.site.users;


		var tiles = users.map(this.renderUser);
		return (
			<FlatLayout>

				<h1>Ufa42 Team</h1>
				<div className="row">

{tiles}

				</div>



			</FlatLayout>
		);
	}
});


module.exports = TeamPage;
