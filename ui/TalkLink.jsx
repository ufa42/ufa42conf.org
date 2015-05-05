/** @jsx React.DOM */

var React = require("react");

var DurationLabel = require("./DurationLabel");

var TalkLink = React.createClass({
	propTypes: {
	},

	render: function render() {
		var talk = this.props.talk;


		var labels = [];

		if (talk.slides) {
			labels.push(" ");
			labels.push(<span className="label round success">Slides</span>);
		}
		if (talk.video) {
			labels.push(" ");

			labels.push(<span className="label round info">Video</span>);
		}
		labels.push(" ");
		labels.push(<DurationLabel duration={talk.duration} />);
		return (
			<span>
				<a href="#">{talk.title}</a>
				{labels}


			</span>
		);
	}
});


module.exports = TalkLink;
