/** @jsx React.DOM */

var React = require("react");

var DurationLabel = require("./DurationLabel");

var TalkLink = React.createClass({
	propTypes: {
	},

	render: function render() {
		var talk = this.props.talk;


		var labels = [];

		labels.push(<DurationLabel duration={talk.duration} />);
		if (talk.slides) {
			labels.push(" - ");
			labels.push(
				<a href={talk.slides}>Slides</a>
			);
		}
		if (talk.video) {
			labels.push(" - ");

			labels.push(<a href={talk.video}>Video</a>);
		}
		return (
			<span>
				{talk.title}
				{" "}{labels}


			</span>
		);
	}
});


module.exports = TalkLink;
