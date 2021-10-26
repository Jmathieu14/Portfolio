const {describe, it} = require('mocha');
const assert = require('assert');
// Import test ready version of my-react-components.js
const util = require('../../concat/files/test-ready-utility.js');

describe('Test utility functions', function() {
    const maxIter = 10;
    for (var iter = 0; iter < maxIter; ++iter) {
        it('genKey() - key1 should !== key2 iter: ' + iter.toString(), function() {
            const myName = "poof";
            let key1 = util.genKey(myName);
            let key2 = util.genKey(myName);
            assert(key1 !== key2);
        });
    }
    it('repeatStringNTimes() - n=5, str="repeatme", sep="5"', function() {
        let n = 5;
        let sep = "5";
        let s = "repeatme"
        let actual = util.repeatStringNTimes(s, n, sep);
        let expected = "repeatme5repeatme5repeatme5repeatme5repeatme";
        assert(actual === expected);
    });
    it('repeatStringNTimes() - n=0, str="wow", sep=""', function() {
        let n = 0;
        let sep = "";
        let s = "wow"
        let actual = util.repeatStringNTimes(s, n, sep);
        let expected = "";
        assert(actual === expected);
    });
    it('repeatStringNTimes() - n=1, str="wow", sep="70"', function() {
        let n = 1;
        let sep = "70";
        let s = "wow"
        let actual = util.repeatStringNTimes(s, n, sep);
        let expected = "wow";
        assert(actual === expected);
    });
    it('Does my_display_dimensions initialize correctly?', function() {
        let expected = { width: 0, height: 0 };
        assert((util.my_display_dimensions.width === expected.width && util.my_display_dimensions.height === expected.height) === true);
    });
});
