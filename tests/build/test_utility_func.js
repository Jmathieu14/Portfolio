"use strict";

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Import test ready version of my-react-components.js


var mrc = require('../../concat/files/test-ready-mrc.js');

describe('Testing utility functions', function () {
  var maxIter = 10;

  for (var iter = 0; iter < maxIter; ++iter) {
    it('key1 should !== key2 iter: ' + iter.toString(), function () {
      var myName = "poof";
      var key1 = mrc.genKey(myName);
      var key2 = mrc.genKey(myName);
      assert(key1 !== key2);
    });
  }
});