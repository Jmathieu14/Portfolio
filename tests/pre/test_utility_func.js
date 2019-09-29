const {describe, it} = require('mocha');
const assert = require('assert');
// Import test ready version of my-react-components.js
const mrc = require('../../concat/files/test-ready-mrc.js');

describe('Testing utility functions', function() {
    const maxIter = 10;
    for (var iter = 0; iter < maxIter; ++iter) {
        it('key1 should !== key2 iter: ' + iter.toString(), function() {
            const myName = "poof";
            let key1 = mrc.genKey(myName);
            let key2 = mrc.genKey(myName);
            assert(key1 !== key2);
        });
    }
});
