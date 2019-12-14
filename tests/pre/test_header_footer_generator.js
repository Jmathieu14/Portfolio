const {describe, it} = require('mocha');
const assert = require('assert');

// Import header footer generator
const hfg = require('../../concat/files/header-footer-generator.js');


describe('Test header and footer file generation', function() {
    it('should make footer file', function() {
        var myHeaderFooterGenerator = new hfg.HeaderFooterGenerator();
//        assert(actual === expected);
    });
});