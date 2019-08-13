"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Copied and modified from node.js website's tutorial
// https://nodejs.org/en/docs/guides/getting-started-guide/
var http = require('http');

var hostname = '127.0.0.1';
var port = 999;
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Local Server Running for Portfolio Overhaul Website\n');
}); // Load babel core module
//const babel = require('babel-core');
// Load inline json import module
// https://www.npmjs.com/package/babel-plugin-inline-json-import

var babelPluginInlineJsonImport = require("babel-plugin-inline-json-import");

server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
var _default = server;
exports["default"] = _default;