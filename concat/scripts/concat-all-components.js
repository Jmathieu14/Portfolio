// Variables
const myDir = "../../js/components";
const destination = "js/prod/all-components.js";

// Imports
const concat = require('concat-files')(myDir);
const GFL = require("../../concat/scripts/get-file-list.js")

function _processList(fileList) {
    // Do whatever with the fileList!
    console.log(fileList);
}

// Get list of files in directory 'myDir'; Process this list
// in callback function '_processList'
GFL.getFileList(myDir, _processList);
