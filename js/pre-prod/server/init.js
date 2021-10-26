// Init file for Node.js server

// Copied and modified from node.js website's tutorial
// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');
const bytenode = require('bytenode');
//const overhaul = require('overhaul.jsc');
//https://hackernoon.com/how-to-compile-node-js-code-using-bytenode-11dcba856fa9
const hostname = '127.0.0.1';
const port = 117;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Local Server Running for Portfolio Overhaul Website\n');
});

try {
  server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  });
} catch(err) {
  console.log(err);
}

export default server;