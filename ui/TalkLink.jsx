/** @jsx React.DOM */

var React = require("react");

var DurationLabel = require("./DurationLabel");

var TalkLink = React.createClass({
	propTypes: {
	},

	render: function render() {
		var talk = this.props.talk;
		var labels = [];

		labels.push(<DurationLabel duration={talk.duration} key="duration"/>);
		if (talk.slides) {
			labels.push(" - ");
			labels.push(
				<a href={talk.slides} key="slides">Slides</a>
			);
		}
		if (talk.video) {
			labels.push(" - ");
			var video = talk.video;
			if (video.indexOf("http") === -1) {
				video = "https://www.youtube.com/watch?v=" + video;
			}

			labels.push(<a href={video} key="video">Video</a>);
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
