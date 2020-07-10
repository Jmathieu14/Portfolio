const React = require('react');
// Return html element that will serve as the target to render a modal on activation
function ModalRenderTarget() {
    return ( 
        <div id="MODAL_RENDER_TARGET"></div>
    );
}

// Import our custom font(s) by creating HTML link tag with path to custom font
function FontImport(props) {
    return (
        <link href={props.path} rel="stylesheet">
        </link>
    );
}

module.exports = {
    ModalRenderTarget: ModalRenderTarget,
    FontImport: FontImport
};
