const path = require('path');
const fs = require('fs');
// Include so callback can run test methods
const assert = require('assert');

const ERR_FILE_DNE = 34;
const optionalCallback = null;

function isFile(path) {
    const fileRegex = /\.\w+$/;
    return path.search(fileRegex) > 0;
}

function isFolder(path) {
    const standardFolderRegex = /\/\w+$/;
    const altFolderRegex = /\\+\w+$/;
    return path.search(standardFolderRegex) >= 0
        || path.search(altFolderRegex) >= 0;
}

function doesFolderExist(path, _callback) {
    fs.stat(path, function(err, stats) {
        if (err === null) {
            _callback(true);
        } else {
            (err.code === 'ENOENT' 
             || err.code === 'ENOTDIR') ? 
                _callback(false) : 
                _callback(err);            
        }
    });
}

function createFolderIfDNE(path, _callback) {
    // fs.mkdir already checks if folder exists before creating it; this cleans up the output
    fs.mkdir(path, (err) => {
        // Return success if no error or error code equals 'dir already exists' (EEXIST)
        if (err === null || err.code === 'EEXIST') {
            _callback(true);
        } else {
            _callback(false);
        }
    });
}

module.exports = {
    createFolderIfDNE: createFolderIfDNE,
    isFile: isFile,
    isFolder: isFolder,
    doesFolderExist: doesFolderExist
};
