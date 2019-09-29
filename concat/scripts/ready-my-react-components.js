// Concatenate react-require.js with my-react-components.js for testing purposes

const concat = require('concat-files');

let fileList = ["js/react-require.js", "js/components/my-react-components.js", "js/components/mrc-exports.js"];

let destination = "concat/files/test-ready-mrc.js";

concat(fileList, destination, function(err) {
    if (err) throw err
    console.log('Files concatenated successfully');
});
