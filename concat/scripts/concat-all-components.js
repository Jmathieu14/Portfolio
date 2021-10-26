// Imports
const concat = require('concat-files');
const GFL = require("../../concat/scripts/get-file-list.js");

// Variables
const myDir = "../../js/prod/components";
const destination = "js/prod/all-components.js";

function _processList(fileList) {
    // Do whatever with the fileList!
    console.log(fileList);
    // Concat all the files in this list!
    concat(fileList, destination, function(err) {
        if (err) throw err
        console.log('Files concatenated successfully');
    });
}

// Get list of files in directory 'myDir'; Process this list
// in callback function '_processList'
GFL.getFileList(myDir, _processList);
