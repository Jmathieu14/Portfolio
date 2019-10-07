"use strict";

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Import test ready version of my-react-components.js


var mrc = require('../../concat/files/test-ready-mrc.js');

describe('Testing utility functions', function () {
  var maxIter = 10;

  for (var iter = 0; iter < maxIter; ++iter) {
    it('genKey() - key1 should !== key2 iter: ' + iter.toString(), function () {
      var myName = "poof";
      var key1 = mrc.genKey(myName);
      var key2 = mrc.genKey(myName);
      assert(key1 !== key2);
    });
  }

  it('repeatStringNTimes() - n=5, str="repeatme", sep="5"', function () {
    var n = 5;
    var sep = "5";
    var s = "repeatme";
    var actual = mrc.repeatStringNTimes(s, n, sep);
    var expected = "repeatme5repeatme5repeatme5repeatme5repeatme";
    assert(actual === expected);
  });
  it('repeatStringNTimes() - n=0, str="wow", sep=""', function () {
    var n = 0;
    var sep = "";
    var s = "wow";
    var actual = mrc.repeatStringNTimes(s, n, sep);
    var expected = "";
    assert(actual === expected);
  });
  it('repeatStringNTimes() - n=1, str="wow", sep="70"', function () {
    var n = 1;
    var sep = "70";
    var s = "wow";
    var actual = mrc.repeatStringNTimes(s, n, sep);
    var expected = "wow";
    assert(actual === expected);
  });
});