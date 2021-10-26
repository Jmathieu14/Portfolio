"use strict";

// Load react variables
var React = require('react');

var ReactDOM = require('react-dom'); // Used to be joined into other files, negating the need to write this into each file for test purposes"use strict";

// Utility functions ------------------------------------------------
// 
// Return a key for given it's name (n)
function genKey(n) {
  var k = n + "-" + Math.random().toString().substr(2);
  return k;
} // Variable to store our display dimensions


var my_display_dimensions = {
  "width": 0,
  "height": 0
}; // Record body dimensions to our display dimensions variable (above)

function recordDisplayDimensions(debug) {
  var b = document.getElementsByTagName("body")[0];
  my_display_dimensions.height = b.clientHeight;
  my_display_dimensions.width = b.clientWidth; // Print to console if debugging enabled

  if (debug) console.log(my_display_dimensions);
} // Variables that store the section list class name and whether 
// or not the section list is displayed


var SECT_LIST_CLASS = "section-list";
var SECT_DISPLAYED = false; // Represents the maximum allowed width for the mobile view (in pixels)

var MOBILE_VIEW_MAX_WIDTH = 450; // Show the section list

function showSectionList() {
  if (!SECT_DISPLAYED) {
    var sectList = document.getElementsByClassName(SECT_LIST_CLASS)[0]; // If there is a section list on the page

    if (sectList !== undefined && sectList !== null) {
      sectList.className = SECT_LIST_CLASS + " show";
      SECT_DISPLAYED = true;
    }
  }
} // Selectors for angular dividers


var ANGLR_DIV_SEL = ".angular-divider";
var ANGLR_DIV_REV_SEL = ".angular-divider-rev"; // Update dimensions of Angular Section Dividers on page
// (the non-react way)

function resizeDividersOnPageResize() {
  // Enable or disable debugging screen dimensions
  var debug = false; // Record the display dimensions

  recordDisplayDimensions(debug);
  var dividers = document.querySelectorAll(ANGLR_DIV_SEL + ", " + ANGLR_DIV_REV_SEL); // Iterate through each angular divider on page

  for (var i = 0; i < dividers.length; ++i) {
    var d = dividers[i];
    var wrapper = d.parentElement;
    var angContent = wrapper.previousElementSibling.previousElementSibling;
    var dBorderH = wrapper.clientHeight - d.clientHeight; // Set element d's width to 0, b/c border width takes up space

    d.style.width = "0px";
    d.style.borderTop = dBorderH + "px solid transparent"; // Apply proper styling to reverse angular divider

    if (d.className.indexOf("-rev") > 0) {
      d.style.borderLeft = wrapper.clientWidth + "px solid black"; // Else apply normal styling
    } else {
      d.style.borderRight = wrapper.clientWidth + "px solid black";
    }
  } // Show the section list if not yet shown


  showSectionList();
} // Add event listener to window resizing event


window.addEventListener("resize", resizeDividersOnPageResize); // Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php
// Return the string repeated n times (as a string)

function repeatStringNTimes(str, n, sep) {
  if (n <= 0) return "";
  var strPlusSep = str + sep;
  var res = "";
  var ctr = 0;

  while (ctr < n - 1) {
    res = res + strPlusSep;
    ++ctr;
  }

  return res + str;
} // Return true if the object 'o' is not undefined and contains the key 'k'


function checkObjAndKey(o, k) {
  return o != null && k in o;
} // Old domain we do not want users using any further
// Make sure it is in lowercase or redirect will fail!


var oldDomain = "rawgit.com"; // Redirect the user to the github pages location of the site if the url is of domain rawgit

function redirectToGitHubPages() {
  var curDomain = window.location.hostname;

  if (curDomain.toLowerCase() === oldDomain) {
    // Where to redirect to
    var updatedLoc = "https://jmathieu14.github.io/Portfolio/html/home.html";
    console.log("Redirecting to most up to date page");
    window.open(updatedLoc, "_self");
  }
}

var GLOBAL_IMAGE_SLIDER = null; // End of Utility functions -----------------------------------------"use strict";

// Function that defines what functions will be exported from Utility.js [for testing using mocha on node.js]
module.exports = {
  genKey: genKey,
  repeatStringNTimes: repeatStringNTimes,
  checkObjAndKey: checkObjAndKey,
  my_display_dimensions: my_display_dimensions,
  redirectToGitHubPages: redirectToGitHubPages,
  recordDisplayDimensions: recordDisplayDimensions,
  showSectionList: showSectionList,
  resizeDividersOnPageResize: resizeDividersOnPageResize
};