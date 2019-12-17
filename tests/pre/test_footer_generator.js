const {describe, it} = require('mocha');
const assert = require('assert');
const path = require('path');
const fs = require('fs');

// Import header footer generator
const footerGen = require('../../js/dev/footer-generator.js');


describe('Test footer file generation', function() {
    it('should make footer file path correctly', function() {
        const testFooterFileName = "test-footer.js";
        const testFooterFilePath = __dirname + "";
        const myFooterGenerator = new footerGen.FooterGenerator(testFooterFileName, testFooterFilePath);
        
        const actualFilePath = myFooterGenerator.getFilePath();
        
        const expectedFilePath = testFooterFilePath + "\\" + testFooterFileName;
        
        assert(actualFilePath === expectedFilePath);
    });
});