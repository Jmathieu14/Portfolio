"use strict";

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert'); // Require path and fs modules


var path = require('path');

var fs = require('fs'); // Import header footer generator


var footerGen = require('../../js/dev/footer-generator.js');

describe('Test footer file generation', function () {
  it('should make footer file path correctly', function () {
    var testFooterFileName = "test-footer.js";
    var testFooterFilePath = __dirname + "";
    var myFooterGenerator = new footerGen.FooterGenerator(testFooterFileName, testFooterFilePath);
    var actualFilePath = myFooterGenerator.getFilePath();
    var expectedFilePath = testFooterFilePath + "\\" + testFooterFileName;
    assert(actualFilePath === expectedFilePath);
  });
});