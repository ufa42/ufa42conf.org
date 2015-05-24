/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var Avatar = require("./Avatar");

var TeamPage = React.createClass({
	propTypes: {
	},

	renderUser: function(user) {

		var labels = [];
		if (user.talks.length > 0) {
			labels.push(<span key="talks">Talks: {user.talks.length}</span>);
		}
		return (
			<div className="large-6 columns" key={user.url}>
				<div className="row">
					<hr />
					<div className="columns large-2 small-3">
						<Avatar user={user} size="70" />
					</div>
					<div className="columns large-10 small-7">
						<a href={user.url}>{user.name}</a>
						<br />{labels}
					</div>
				</div>
			</div>

		);

	},

	render: function render() {
		var users = this.props.site.users;
		users.sort(function(a, b){
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});


		var tiles = users.map(this.renderUser);
		return (
			<FlatLayout title="Ufa42 Team">
				<h1>Ufa42 Team</h1>
				<div className="row">
					{tiles}
				</div>
			</FlatLayout>
		);
	}
});


module.exports = TeamPage;
