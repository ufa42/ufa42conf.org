/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var TeamPage = React.createClass({
	propTypes: {
	},

	renderUser: function(user) {
		return (
			<div className="large-6 columns">
				<div className="row">
					<div className="columns large-2 small-3">
						<img src={user.photo} height="100" width="100"/>
					</div>
					<div className="columns large-10 small-7">

					<a href={user.url}>{user.name}</a>
					</div>
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
