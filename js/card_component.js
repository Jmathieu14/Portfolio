// *** NOTE *** Requires my_scroll.js to be imported into html file before it to compile correctly

// var activecardrow = document.getElementById('emptyHTMLElement');
var activecardrow = null;

// Function to make image card given the image name and it's description
function makeImageCard(imgName, descr) {
    var imgCardTemplate =
    '<div class=\"col s12 m6 card-temp\">'
      + '<div class=\"card\">'
        + '<div class=\"card-image\">'
          + '<img src=\"../img/'+imgName+'\">'
          + '<!-- <span class=\"card-title black-text\">Setup Start</span> -->'
          + '<a class=\"btn-floating halfway-fab waves-effect waves-light pink\" href=\"../img/'+imgName+'\" target=\"_blank\"><i class=\"material-icons\">&#xE56B;</i></a>'
        + '</div>'
        + '<div class=\"card-content cus-black cus-light-grey-text\">'
        + '<p>'+descr+'</p>'
        + '</div>'
      + '</div>'
    + '</div>';
    activecardrow.insertAdjacentHTML("beforeEnd", imgCardTemplate);
    // console.log(imgCardTemplate);
}

// Function to make text card given the title and it's description
function makeTextCard(title, descr) {
    var imgCardTemplate =
    '<div class=\"col s12 m6 card-temp\">'
      + '<div class=\"card\">'
        + '<div class=\"mycard-title cus-black-text\">'
          + '<h3>' + title + '</h3>'
        + '</div>'
        + '<div class=\"card-content cus-black cus-light-grey-text\">'
        + '<p>'+descr+'</p>'
        + '</div>'
      + '</div>'
    + '</div>';
    activecardrow.insertAdjacentHTML("beforeEnd", imgCardTemplate);
}

        // <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/696220917&color=%239c27b0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

// Function to make a soundcloud playlist card given a title and it's url
function makeSCEmbedCard(title, url) {
    var scCardTemplate =
    '<div class=\"col s12 m6 card-temp\">'
      + '<div class=\"card\">'
        + '<div class=\"mycard-title cus-black-text\">'
          + '<h3>' + title + '</h3>'
        + '</div>'
        + '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="'
        + url + '"></iframe>'
      + '</div>'
    + '</div>';
    activecardrow.insertAdjacentHTML("beforeEnd", scCardTemplate);
}

// Define global value to track the current position of page scroll
var curScrollIndex = window.pageYOffset;
// Function to toggle expandable sections given the correct ID
function myToggle(id) {
    var mySection = document.getElementById(id);
    turnToggleButton("#" + id + " .es-expand img");
    var myClassName = mySection.className;
    var cnLen = myClassName.length;
    var indexOfClosed = myClassName.indexOf("closed");
    // If closed is in the class name
    if (indexOfClosed !== -1) {
        myClassName = myClassName.substring(0, indexOfClosed - 1) + myClassName.substring(indexOfClosed + 6, cnLen);
        mySection.className = myClassName;
        var distToScroll = calcScrollDistOfFirst("#" + id);
        smoothVerticalScroll(curScrollIndex, distToScroll, 10, 4000, 0);
        // window.scrollTo(0, distToScroll);
    } else {
        mySection.className += " closed";
        setTimeout(function() {
            curScrollIndex = window.pageYOffset;
            // console.log("> Current Scroll Index: " + curScrollIndex);
        }, 50);
    }
}

function turnToggleButton(selector) {
    var myButton = document.querySelector(selector);
    var myClassName = myButton.className;
    var cnLen = myClassName.length;
    var indexOfTurn = myClassName.indexOf("turn");
    // If turn is in the class name
    if (indexOfTurn !== -1) {
        myClassName = myClassName.substring(0, indexOfTurn - 1) + myClassName.substring(indexOfTurn + 5, cnLen);
        myButton.className = myClassName;
    }
    else {
        myButton.className += " turn";
    }
}
