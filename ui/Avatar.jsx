/** @jsx React.DOM */

var React = require("react");

var Avatar = React.createClass({
	propTypes: {
		size: React.PropTypes.oneOf(["70", "200"]).isRequired
	},

	render: function render() {

		var user = this.props.user;
		var size = this.props.size;

		if (user.avatar === undefined) {
			return (<p>TODO: use Ufa42 logo</p>);
		}
		var style = {
			borderRadius: 5
		};

		if (size === "70") {
			return (
				<img src={user.avatar["140"]}
					 width="70"
					 height="70"
					 style={style} />
			);
		}

		return (
				<img src={user.avatar["400"]}
					 width="200"
					 height="200"
					 style={style} />
		);





	}
});


module.exports = Avatar;
