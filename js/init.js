"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Init file for Node.js server
// Copied and modified from node.js website's tutorial
// https://nodejs.org/en/docs/guides/getting-started-guide/
var http = require('http');

var bytenode = require('bytenode'); //const overhaul = require('overhaul.jsc');
//https://hackernoon.com/how-to-compile-node-js-code-using-bytenode-11dcba856fa9


var hostname = '127.0.0.1';
var port = 999;
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Local Server Running for Portfolio Overhaul Website\n');
});
server.listen(port, hostname, function () {
  console.log("Server is running at http://".concat(hostname, ":").concat(port, "/"));

  var React = require('react');

  var ReactDOM = require('react-dom'); // Load test files on init


  require('../tests/build/test_utility_func.js')();
});
var _default = server;
exports["default"] = _default;