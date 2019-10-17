// Return html element that will serve as the target to render a modal on activation
function ModalRenderTarget(props) {
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

// Set title for tab of web page in browser
function PageTitle(props) {
    return (
        <title>{props.text}</title>
    );
}
