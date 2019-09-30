# Portfolio
This is a portfolio of some of the work I have done in relation to Web Design and Development

# Test Procedure
## Running Tests
- Type `npm run-script build` in the terminal after any updates to the code you are testing
- Then simply type `npm run-script test`
## Creating Tests
- Before creating a test file for the file in question, make sure to create a header and/or footer file for the file in question (if necessary)
    - Save any header or footer files under `pre-prod > js > headers` and `pre-prod > js > footers` respectively
    - A header file can include module imports that the file being tested needs that you may not want on the actual file
        - Ex) The React and ReactDOM library is loaded on your HTML page via script tags, thus negating the need to require these libraries in your JavaScript file that uses functions and objects from these libraries. Also, require nor import compiles in plain JS.
    - A footer file can include all the functions and classes that need to be exported as public to allow the test file to test them
        - Ex) `module.exports = { myFunction: myFunction, mySecondFunction: mySecondFunction };`
    - *Note:* `module.exports` can be written at the bottom of the file you are testing, however, it will throw an error to the console on each page load that uses the file. The page will function properly nonetheless, but this is not great practice.
- Next, create a concat script under `concat > scripts` and include `const concat = require('concat-files');` at the top of this file
    - In this file, you can write the code that will concatenate the file you are testing with the header file and footer file you made for it
    - Define the files you would like to concatenate in a list variable:
        - `let fileList = ["js/headers/my-header.js", "js/components/my-test-components.js", "js/footers/my-footer.js"];`
    - Define the destination for the concatenated file. This should be put under `concat > files`:
        - `let destination = "concat/files/my-concatenated-file.js";`
    - Now paste this script in to concatenate the files:
        ```JavaScript
        concat(fileList, destination, function(err) {
            if (err) throw err
            console.log('Files concatenated successfully');
        });
        ```
- Next up, go to package.json and modify the script `execConcats`
    - Simply add `node concat/scripts/my-concat-script.js` to the script, and separate each new addition with `&&`
- Lastly, you can create the actual test file!
    - Create the test file under `tests > pre`
    - Be sure to include `const {describe, it} = require('mocha');` and `const assert = require('assert');` at the top of the test file
    - Next, include the file you are testing (the concatenated/test ready version of it):
        ```JavaScript
        // Import test ready version of my-concatenated-file.js
        const myModuleName = require('../../concat/files/my-concatenated-file.js');
        ```
    - Lastly, write any tests needed for the file in question using mocha and assert
        - Ex) 
        ```JavaScript
        describe('Write purpose of following tests here', function() {
            it('what must be true for this first test to pass in human language', function() {
                let actual = myModuleName.function1();
                let expected = <Insert Expected Value Here>;
                assert(actual === expected);
            });
        });
        ```
- Now you are ready to run your test! Follow the instructions under *Running Tests*

# Resources used:
I used the following article to aid in the setup of my node.js + babel server: https://www.robinwieruch.de/minimal-node-js-babel-setup/#node-js-nodemon

I also used the following example project to further refine my setup: https://github.com/babel/example-node-server

How to smoothly scroll to an element with plain JS:
https://stackoverflow.com/questions/12102118/scrollintoview-animation

How to write unit tests in Node.js (using Mocha):
https://developer.ibm.com/tutorials/learn-nodejs-unit-testing-in-nodejs/
and
https://github.com/jstevenperry/IBM-Developer/tree/master/Node.js/Course/Unit-9

Used concat-files to concatenate files to ease Node.js testing process:
https://www.npmjs.com/package/concat-files

How to use module.exports and why it's necessary in Node.js:
https://stackoverflow.com/questions/33589571/module-exports-that-include-all-functions-in-a-single-line
