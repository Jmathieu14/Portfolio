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

// Load babel script
const babel = require('babel-core');

// Load main page layout json for overhaul.js
const mainPageSects = require("./layouts/main-page-layout.json");

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});