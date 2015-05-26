/** @jsx React.DOM */

var React = require("react");
var FlatLayout = require("./FlatLayout");
var TalkPage = React.createClass({
	propTypes: {
	},

	renderTalkRow: function(talk){


		var slides =(<td/>);
		var video = (<td/>);

		if (talk.slides) {
			slides = <td><a href={talk.slides}>Slides</a></td>;
		}
		if (talk.video) {
			video = <td><a href={talk.video}>Video</a></td>;
		}
		return (
			<tr key={talk.url}>
				<td><a href={talk.speaker.url}>{talk.speaker.name}</a></td>
				<td>{talk.title} <span className="right label round small">{talk.duration}</span></td>
				{slides}
				{video}
			</tr>
		);
	},

	renderConferenceRows: function(conf) {
		var talks = conf.talks.map(this.renderTalkRow);
		var list = [];
		list.push(<h3>Conference {conf.title}</h3>);
		list.push(<table role="grid" width="100%"><tbody>{talks}</tbody></table>);

		return list;
	},

	render: function render() {
		var site = this.props.site;

		var items = site.conferences.map(this.renderConferenceRows);

		return (
			<FlatLayout title="Talks">
				<h1>Talks</h1>
				<div className="row">
					<div className="columns large-12">

					{items}
					</div>
				</div>
			</FlatLayout>
		);
	}
});


module.exports = TalkPage;
