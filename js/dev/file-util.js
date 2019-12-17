const path = require('path');
const fs = require('fs');

const ERR_DNE = 34;
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

// See Source 1. at bottom of file for more information
async function doesFolderExist(path) {
    fs.stat(path, function(err, stats) {
        const folderExists = err === null || err.errno !== ERR_DNE;
        return folderExists;
    });
}

async function createFolderIfDNE(path, _callback) {
    if (!doesFolderExist(path)) {
//        fs.mkdir(path, _callback);
    }
}

module.exports = {
    createFolderIfDNE: createFolderIfDNE,
    isFile: isFile,
    isFolder: isFolder,
    doesFolderExist: doesFolderExist
};

// Source 1.
// Credit for aiding doesFolderExist function goes to:
// https://blog.raananweber.com/2015/12/15/check-if-a-directory-exists-in-node-js/
