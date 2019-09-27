const React = require('react');
const ReactDOM = require('react-dom');
const {describe, it} = require('mocha');
const assert = require('assert');
// Import my-react-components.js
require('../../js/my-react-components.js')();

describe('Testing utility functions', function() {
    it('key1 should be different from key2', function() {
        const myName = "poof";
        let key1 = genKey(myName);
        let key2 = genKey(myName);
        assert(key1 !== key2);
    });
});
