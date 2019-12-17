const {describe, it} = require('mocha');
const assert = require('assert');
const path = require('path');
const fs = require('fs');

// Import 'file util' file
const fileUtil = require('../../js/dev/file-util.js');

function assertTrue(exp) {
    return assert(exp === true);
}

function assertFalsy(exp) {
    return assert(exp === undefined || exp === null || exp === false);
}

const optionalCallback = null;

describe('Test file util functions', function() {
    
    it('should say input is a file and not folder', () => {
        const testFile = __dirname + "/folder/file.txt";
        const testFileNoDir = "file.txt";
        assertTrue(fileUtil.isFile(testFile));
        assertTrue(fileUtil.isFile(testFileNoDir));
    });
    
    it('should say input is not a file', () => {
        const folder = __dirname + "/folder";
        const justAString = "whatEvenIsThis.";
        assertFalsy(fileUtil.isFile(folder));
        assertFalsy(fileUtil.isFile(justAString));
    });
    
    it('should say input is a folder', () => {
        const testFolderPath = __dirname + "/folder";
        const testBaseFolder = "/folder";
        const altFolderSep = __dirname + "\\path\\folder";  
        assertTrue(fileUtil.isFolder(testFolderPath));
        assertTrue(fileUtil.isFolder(testBaseFolder));
        assertTrue(fileUtil.isFolder(altFolderSep));
    });
    
    it('should say input is not a folder', () => {
        const file = __dirname + "/path/to/file.txt";
        const justAString = "whatEv/enIsThis.";
        assertFalsy(fileUtil.isFolder(file));
        assertFalsy(fileUtil.isFolder(justAString));
    });
    
    xit('should say folder DNE', async() => {
        const testPath = __dirname + "/FOLDER_DNE_99302";
        assertTrue(fileUtil.doesFolderExist(testPath));
    });
    
    xit('should say folder exists', async() => {
        const curDir = __dirname;
        console.log(curDir);
        assertTrue(fileUtil.doesFolderExist(curDir));
    });
    
    xit('should make folder if DNE', async function() {
        const testPath = __dirname + "/NEW_FOLDER_1234";
        
        fileUtil.createFolderIfDNE(testPath, (stuff) => {
            console.log(stuff);
        });
//        assertTrue(fileUtil.createFolderIfDNE(testPath));
    });
});
