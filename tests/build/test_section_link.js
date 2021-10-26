"use strict";

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Import test ready version of SectionLink.js


var sl = require('../../concat/files/test-ready-section-link-component.js');

var React = require('react');

describe('Test Section Link Component', function () {
  // TODO: load this code into a beforeEach function
  it('should load props correctly', function () {
    var test_props = {
      specs: {
        name: 'section-link-test',
        logo: 'sl-test-url.png',
        url: 'test-url-123.path',
        hoverBG: '#333333',
        hoverBGName: 'feelingThaThrees',
        target: 'test_target'
      }
    };
    var mySl = new sl.SectionLink(test_props);
    assert(mySl.specs === test_props.specs); // const slRender = mySl.render();
    // console.log(slRender);
  }); // TODO:
  // Test for existence of <a> element with given url
  // Test for existence of name under render's class name
  // Test for target of <a> being set to given target
  // Test for existence of <img> tag with given logo url
});