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
			return (<li>
	{t.title}
			</li>);

		});
		return (
			<Layout>

				<h1>{user.name}</h1>
				<div className="row">
					<div className="large-4 columns">

						<img src={user.photo} width="100" height="100"/>

					</div>

					<div className="large-8 columns">
						<p>About the user</p>

					</div>

				</div>
				<div className="row">
					<hr />
					<h4>Talks</h4>

				<ul>{achievments} </ul>

				</div>



			</Layout>
		);
	}
});


module.exports = ProfilePage;
