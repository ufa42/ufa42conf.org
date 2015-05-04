/** @jsx React.DOM */

var React = require("react");

var Layout = require("./FlatLayout");

var ProfilePage = React.createClass({
	propTypes: {
	},



	render: function render() {


		var user = this.props.item;
		var talks = user.talks;


		var achievments = talks.map(function(t){
			return (<div>
	<strong>{t.title}</strong> - {t.date}
			</div>);

		});
		return (
			<Layout>
				<h1>{user.name}</h1>

				<img src={user.photo} width="100" height="100"/>

				<div>{achievments} </div>

			</Layout>
		);
	}
});


module.exports = ProfilePage;
