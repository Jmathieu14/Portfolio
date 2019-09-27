"use strict";

var React = require('react');

var ReactDOM = require('react-dom');

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Import my-react-components.js


require('../../js/my-react-components.js')();

describe('Testing utility functions', function () {
  it('key1 should be different from key2', function () {
    var myName = "poof";
    var key1 = genKey(myName);
    var key2 = genKey(myName);
    assert(key1 !== key2);
  });
});