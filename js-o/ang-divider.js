var ANGLR_DIV_SEL = ".angular-divider";
var ANGLR_DIV_REV_SEL = ".angular-divider-rev";
var SECT_LIST_CLASS = "section-list";
var SECT_DISPLAYED = false;
var my_display_dimensions = {
    "width": 0,
    "height": 0
}

function recordDisplayDimensions() {
    var b = document.getElementsByTagName("body")[0];
    my_display_dimensions.height = b.clientHeight;
    my_display_dimensions.width = b.clientWidth;
    console.log(my_display_dimensions);
}

// Show the section list
function showSectionList() {
    if (!SECT_DISPLAYED) {
        var sectList = document.getElementsByClassName(SECT_LIST_CLASS)[0];
        // If there is a section list on the page
        if (sectList !== null) {
            sectList.className = SECT_LIST_CLASS + " show";
            SECT_DISPLAYED = true;
        }
    }
}

// Properly format angular dividers on given page
function angularDivSetup() {
    recordDisplayDimensions();    
    var dividers = document.querySelectorAll(ANGLR_DIV_SEL + ", " + ANGLR_DIV_REV_SEL);
    // Iterate through each angular divider on page
    for (var i = 0; i < dividers.length; ++i) {
        var d = dividers[i];
        var wrapper = d.parentElement;
        var angContent = wrapper.previousElementSibling;
        var dBorderH = wrapper.clientHeight - d.clientHeight;
        
        // Set element d's width to 0, b/c border width takes up space
        d.style.width = "0px";
        d.style.borderTop = dBorderH + "px solid transparent";
        // Apply proper styling to reverse angular divider
        if (d.className.indexOf("-rev") > 0) {
            d.style.borderLeft = wrapper.clientWidth + "px solid black";
        // Else apply normal styling
        } else {
            d.style.borderRight = wrapper.clientWidth + "px solid black";
        }
    }
    showSectionList();
}

function delayAngDivSetup() {
    window.setTimeout(function() { 
        angularDivSetup(); 
    }, 75);
}

// Add event listener to window resizing event
window.addEventListener("resize", angularDivSetup);
// Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php