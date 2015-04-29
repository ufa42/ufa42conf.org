var React = require("react");


function renderComponent(component, props) {
	var el = React.createElement(component, props);
	var out = React.renderToStaticMarkup(el);
	return "<!DOCTYPE html>" + out;
}

module.exports = {
	component: renderComponent
};
