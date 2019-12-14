// Concatenate react-require.js with SectionLink.js for testing purposes; Transform it into the Node.js format
const concat = require('concat-files');

let fileList = ["js/prod/headers/react-require.js", "js/prod/components/SectionLink.js", "js/prod/footers/section-link-exports.js"];

let destination = "concat/files/test-ready-section-link-component.js";

concat(fileList, destination, function(err) {
    if (err) throw err
    console.log('Section Link component files concatenated successfully');
});
