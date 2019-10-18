// Concatenate react-require.js with FunctionComponents.js for testing purposes; Transform it into the Node.js format
const concat = require('concat-files');

let fileList = ["js/headers/react-require.js", "js/components/FunctionComponents.js", "js/footers/function-components-exports.js"];

let destination = "concat/files/test-ready-function-components.js";

concat(fileList, destination, function(err) {
    if (err) throw err
    console.log('Function component files concatenated successfully');
});
