// Concatenate react-require.js with Utility.js for testing purposes; Transform it into the Node.js format
const concat = require('concat-files');

let fileList = ["js/headers/react-require.js", "js/components/Utility.js", "js/footers/utility-exports.js"];

let destination = "concat/files/test-ready-utility.js";

concat(fileList, destination, function(err) {
    if (err) throw err
    console.log('Utility files concatenated successfully');
});
