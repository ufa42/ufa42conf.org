/** @jsx React.DOM */

var React = require("react");

var Layout = require("./FlatLayout");
var Avatar = require("./Avatar");
var TalkLink = require("./TalkLink");
var UserPage = React.createClass({
	propTypes: {
	},


	renderUserInfo: function(user) {

		var items = [];
		if (user.twitter) {
			var url = "https://twitter.com/" + user.twitter;
			var name = "twitter.com/" + user.twitter;
			items.push(
				<li key="twitter">
					<strong>Twitter: </strong>
					<a href={url}>{name}</a>
				</li>
			);
		}
		if (user.github) {
			var url = "https://github.com/" + user.github;
			var name = "github.com/" + user.github;
			items.push(
				<li key="github">
					<strong>Github: </strong>

					<a href={url}>{name}</a>
				</li>
			);
		}
		if (user.blog) {
			items.push(
				<li key="blog">
					<strong>Blog: </strong>
					<a href={user.blog}>{user.blog}</a>
				</li>
			);
		}
		return items;
	},



	render: function render() {


		var user = this.props.item;
		var talks = user.talks;


		var achievments = talks.map(function(t){
			return (
				<li key={t.url}>
					<strong>Talk: </strong> <TalkLink talk={t} />
				</li>
			);

		});

		var userInfo = this.renderUserInfo(user);
		return (
			<Layout title={user.name}>
				<h1>{user.name}</h1>
				<div className="row">
					<div className="large-4 columns">
						<Avatar user={user} size="200"/>


					</div>

					<div className="large-8 columns">
						{userInfo}
					</div>

				</div>
				<div className="row">
					<hr />
					<h4>Activity</h4>
					<ul>{achievments} </ul>
				</div>
			</Layout>
		);
	}
});


module.exports = UserPage;
