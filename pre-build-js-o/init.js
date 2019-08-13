// Copied and modified from node.js website's tutorial
// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = '127.0.0.1';
const port = 999;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Local Server Running for Portfolio Overhaul Website\n');
});

// Load babel core module
//const babel = require('babel-core');

// Load inline json import module
// https://www.npmjs.com/package/babel-plugin-inline-json-import
const babelPluginInlineJsonImport = require("babel-plugin-inline-json-import")

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default server;