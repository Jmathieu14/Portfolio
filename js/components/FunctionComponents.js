"use strict";

// Return html element that will serve as the target to render a modal on activation
function ModalRenderTarget(props) {
  return React.createElement("div", {
    id: "MODAL_RENDER_TARGET"
  });
} // Import our custom font(s) by creating HTML link tag with path to custom font


function FontImport(props) {
  return React.createElement("link", {
    href: props.path,
    rel: "stylesheet"
  });
} // Set title for tab of web page in browser


function PageTitle(props) {
  return React.createElement("title", null, props.text);
}