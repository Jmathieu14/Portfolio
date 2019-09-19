var ANGLR_DIV_SEL = ".angular-divider";
var ANGLR_DIV_REV_SEL = ".angular-divider-rev";


// Properly format angular dividers on given page
function angularDivSetup() {
    // Enable or disable debugging screen dimensions
    var debug = false;
    // Record the display dimensions
    recordDisplayDimensions(debug);    
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