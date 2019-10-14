// Variables
const myDir = "../../js/components";
const destination = "js/prod/all-components.js";

// Imports
const concat = require('concat-files')(myDir);
const GFL = require("../../concat/scripts/get-file-list.js")

console.log(GFL);
console.log(GFL.getFileList(myDir));
