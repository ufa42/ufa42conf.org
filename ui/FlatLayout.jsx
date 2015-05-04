/** @jsx React.DOM */

var React = require("react");

var HtmlHead = require("./HtmlHead");

var FlatLayout = React.createClass({
	propTypes: {
	},

	render: function render() {
		return (

			<html lang="en">
				<HtmlHead title={this.props.title} site={this.props.site} description={this.props.description} />
				<body>
					<div className="row">
						<div className="large-12 columns">
							<div className="nav-bar right">
								<ul className="button-group">
									<li><a href="/" className="button">Home</a></li>
									<li><a href="/team" className="button">Team</a></li>
									<li><a href="/talks" className="button">Talks</a></li>

								</ul>
							</div>


							{this.props.children}



							<footer className="row">
								<hr />
								<div className="large-12 columns">
									<div className="row">
										<div className="large-6 columns">
											<p>&copy; Copyright Ufa 42 Team.</p>
										</div>
										<div className="large-6 columns">
											<ul className="inline-list right">
												<li><a href="#">Link 1</a></li>
												<li><a href="#">Link 2</a></li>
												<li><a href="#">Link 3</a></li>
												<li><a href="#">Link 4</a></li>
											</ul>
										</div>
									</div>
								</div>
							</footer>

						</div>
					</div>
				</body>
			</html>
		);
	}
});


module.exports = FlatLayout;
