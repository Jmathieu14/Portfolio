const {describe, it} = require('mocha');
const assert = require('assert');
// Import test ready version of my-react-components.js
const fcomp = require('../../concat/files/test-ready-function-components.js');
const React = require('react');

describe('Test React Function Components', function() {
    it('Test Modal Render Target component', function() {
        let expected = {};
        // Don't be too strict on the expected type; allow for
        // div, span or section
        expected.types = ["div", "span", "section"];
        expected.props = { id: 'MODAL_RENDER_TARGET' };
        let actual = fcomp.ModalRenderTarget();
        assert(expected.types.indexOf(actual.type) >= 0);
        assert(actual.props.id === expected.props.id);
    });
    it('Test FontImport component', function() {
        let expected = {
            type: "link",
            path: "weh",
            rel: "stylesheet"
        };
        let actual = fcomp.FontImport({ path: "weh" });
        assert(actual.type === expected.type);
        assert(actual.props.href === expected.path);
        assert(actual.props.rel === expected.rel);
    });
    it('Test PageTitle component', function() {
        let expected = {
            type: "title",
            text: "Great Title!"
        };
        let actual = fcomp.PageTitle({ text: "Great Title!" });
        assert(actual.type === expected.type);
        assert(actual.props.children === expected.text);
    });
});