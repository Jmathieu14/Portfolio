"use strict";

// Load react variables
var React = require('react');

var ReactDOM = require('react-dom'); // Used to be joined into other files, negating the need to write this into each file for test purposes"use strict";

// Return html element that will serve as the target to render a modal on activation
function ModalRenderTarget(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "MODAL_RENDER_TARGET"
  });
} // Import our custom font(s) by creating HTML link tag with path to custom font


function FontImport(props) {
  return /*#__PURE__*/React.createElement("link", {
    href: props.path,
    rel: "stylesheet"
  });
} // Set title for tab of web page in browser


function PageTitle(props) {
  return /*#__PURE__*/React.createElement("title", null, props.text);
}"use strict";

module.exports = {
  ModalRenderTarget: ModalRenderTarget,
  FontImport: FontImport,
  PageTitle: PageTitle
};