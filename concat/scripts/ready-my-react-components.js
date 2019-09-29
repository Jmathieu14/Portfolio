// Concatenate react-require.js with my-react-components.js for testing purposes

const concat = require('concat-files');

let fileList = ["../../js/react-require.js", "../../js/components/my-react-components.js"];

let destination = "../files";

concat(fileList, destination, function(err) {
    if (err) throw err
    console.log('Files concatenated successfully');
});
