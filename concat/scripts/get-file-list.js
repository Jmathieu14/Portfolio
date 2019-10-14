// Copied and modified from: https://gist.github.com/vithalreddy/b0388899942e4dea16df329ec3e5ec78
// Author: Vithal Reddy, 2018

//requiring path and fs modules
const path = require('path');
const fs = require('fs');

// Return list of files with the given directory name
function getFileList(myDirectory) {
    // Join the given directory name to the current full path this function is called from
    const fullPath = path.join(__dirname, myDirectory);
    let fileList = [];
    // Pass in fullPath and have error check
    fs.readdir(fullPath, function (err, files) {
        // handle error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        // If successful, return file list
        } else {
            return files;
        }
    });
}

module.exports.getFileList = getFileList;