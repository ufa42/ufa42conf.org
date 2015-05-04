/** @jsx React.DOM */

var React = require("react");

var TalkWidget = React.createClass({
	propTypes: {
	},

	render: function render() {
		var talk = this.props.item;
		var speaker = talk.speaker;
		return (
			<div>
				<img src={speaker.photo} width="100" height="100"/>
				<p>{speaker.name}</p>
				<p>{talk.title}</p>



			</div>
		);
	}
});


module.exports = TalkWidget;
