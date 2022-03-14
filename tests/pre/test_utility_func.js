const {describe, it} = require('mocha');
const assert = require('assert');
// Import test ready version of my-react-components.js
const mrc = require('../../concat/files/test-ready-mrc.js');

describe('Testing utility functions', function() {
    const maxIter = 10;
    for (var iter = 0; iter < maxIter; ++iter) {
        it('genKey() - key1 should !== key2 iter: ' + iter.toString(), function() {
            const myName = "poof";
            let key1 = mrc.genKey(myName);
            let key2 = mrc.genKey(myName);
            assert(key1 !== key2);
        });
    }
    it('repeatStringNTimes() - n=5, str="repeatme", sep="5"', function() {
        let n = 5;
        let sep = "5";
        let s = "repeatme"
        let actual = mrc.repeatStringNTimes(s, n, sep);
        let expected = "repeatme5repeatme5repeatme5repeatme5repeatme";
        assert(actual === expected);
    });
    it('repeatStringNTimes() - n=0, str="wow", sep=""', function() {
        let n = 0;
        let sep = "";
        let s = "wow"
        let actual = mrc.repeatStringNTimes(s, n, sep);
        let expected = "";
        assert(actual === expected);
    });
    it('repeatStringNTimes() - n=1, str="wow", sep="70"', function() {
        let n = 1;
        let sep = "70";
        let s = "wow"
        let actual = mrc.repeatStringNTimes(s, n, sep);
        let expected = "wow";
        assert(actual === expected);
    });
});
