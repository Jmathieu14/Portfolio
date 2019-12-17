"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;

var assert = require('assert');

var path = require('path');

var fs = require('fs'); // Import 'file util' file


var fileUtil = require('../../js/dev/file-util.js');

function assertTrue(exp) {
  return assert(exp === true);
}

function assertFalsy(exp) {
  return assert(exp === undefined || exp === null || exp === false);
}

var optionalCallback = null;
describe('Test file util functions', function () {
  it('should say input is a file and not folder', function () {
    var testFile = __dirname + "/folder/file.txt";
    var testFileNoDir = "file.txt";
    assertTrue(fileUtil.isFile(testFile));
    assertTrue(fileUtil.isFile(testFileNoDir));
  });
  it('should say input is not a file', function () {
    var folder = __dirname + "/folder";
    var justAString = "whatEvenIsThis.";
    assertFalsy(fileUtil.isFile(folder));
    assertFalsy(fileUtil.isFile(justAString));
  });
  it('should say input is a folder', function () {
    var testFolderPath = __dirname + "/folder";
    var testBaseFolder = "/folder";
    var altFolderSep = __dirname + "\\path\\folder";
    assertTrue(fileUtil.isFolder(testFolderPath));
    assertTrue(fileUtil.isFolder(testBaseFolder));
    assertTrue(fileUtil.isFolder(altFolderSep));
  });
  it('should say input is not a folder', function () {
    var file = __dirname + "/path/to/file.txt";
    var justAString = "whatEv/enIsThis.";
    assertFalsy(fileUtil.isFolder(file));
    assertFalsy(fileUtil.isFolder(justAString));
  });
  xit('should say folder DNE',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var testPath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testPath = __dirname + "/FOLDER_DNE_99302";
            assertTrue(fileUtil.doesFolderExist(testPath));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  xit('should say folder exists',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var curDir;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            curDir = __dirname;
            console.log(curDir);
            assertTrue(fileUtil.doesFolderExist(curDir));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  xit('should make folder if DNE',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var testPath;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            testPath = __dirname + "/NEW_FOLDER_1234";
            fileUtil.createFolderIfDNE(testPath, function (stuff) {
              console.log(stuff);
            });
          //        assertTrue(fileUtil.createFolderIfDNE(testPath));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});