"use strict";

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Import test ready version of my-react-components.js


var fcomp = require('../../concat/files/test-ready-function-components.js');

var React = require('react');

describe('Test React Function Components', function () {
  it('Test Modal Render Target component', function () {
    var expected = {}; // Don't be too strict on the expected type; allow for
    // div, span or section

    expected.types = ["div", "span", "section"];
    expected.props = {
      id: 'MODAL_RENDER_TARGET'
    };
    var actual = fcomp.ModalRenderTarget();
    assert(expected.types.indexOf(actual.type) >= 0);
    assert(actual.props.id === expected.props.id);
  });
  it('Test FontImport component', function () {
    var expected = {
      type: "link",
      path: "weh",
      rel: "stylesheet"
    };
    var actual = fcomp.FontImport({
      path: "weh"
    });
    assert(actual.type === expected.type);
    assert(actual.props.href === expected.path);
    assert(actual.props.rel === expected.rel);
  });
  it('Test PageTitle component', function () {
    var expected = {
      type: "title",
      text: "Great Title!"
    };
    var actual = fcomp.PageTitle({
      text: "Great Title!"
    });
    assert(actual.type === expected.type);
    assert(actual.props.children === expected.text);
  });
});