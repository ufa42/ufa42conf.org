/** @jsx React.DOM */

var React = require("react");

var DurationLabel = React.createClass({
	propTypes: {
	},

	render: function render() {
		var duration = this.props.duration;


		if (duration === undefined) {
			throw new Error("Talk duration must be specified");
		}

		if (duration === 5) {
			return (<span className="label round alert">5 min</span>);
		}
		return (<span className="label round">{duration} min</span>);
	}
});


module.exports = DurationLabel;
