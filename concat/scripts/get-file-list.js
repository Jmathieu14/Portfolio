// Copied and modified from: https://gist.github.com/vithalreddy/b0388899942e4dea16df329ec3e5ec78
// Author: Vithal Reddy, 2018

// Require path and fs modules
const path = require('path');
const fs = require('fs');

// Get a list of files under the directory 'myDirectory'
// and call the callback function with the file list as the
// parameter
function getFileList(myDirectory, _callback) {
    // Join the given directory name to the current full path this function is called from
    const fullPath = path.join(__dirname, myDirectory);
    // Pass in fullPath and catch error
    fs.readdir(fullPath, function (err, files) {
        // handle error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        // If successful, return file list
        } else {
            // Add myDirectory to each file path
            let ctr = 0; let lim = files.length;
            while (ctr < lim) {
                files[ctr] = path.join(__dirname, myDirectory + "/" + files[ctr]);
                ++ctr;
            }
            _callback(files);
        }
    });
}

module.exports.getFileList = getFileList;