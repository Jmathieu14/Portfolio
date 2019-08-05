var ANGLR_DIV_SEL = ".angular-divider";
var SECT_LIST_CLASS = "section-list";

// Show the section list
function showSectionList() {
    var sectList = document.getElementsByClassName(SECT_LIST_CLASS)[0];
    // If there is a section list on the page
    if (sectList !== null) {
        sectList.className = SECT_LIST_CLASS + " show";
    }
}

// Properly format angular dividers on given page
function angularDivSetup() {
    var dividers = document.querySelectorAll(ANGLR_DIV_SEL);
    // Iterate through each angular divider on page
    for (var i = 0; i < dividers.length; ++i) {
        var d = dividers[i];
        var d_width = d.clientWidth;
        var wrapper = d.parentElement;
        var angContent = wrapper.previousElementSibling;
        var d_border_height = angContent.clientHeight / 10;
        
        d.style.width = "0px";
        d.style.borderRight = d_width + "px solid black";
        d.style.borderTop = d_border_height + "px solid transparent";
        
        // Set angular divider wrapper height to that of what it's wrapping (borders don't count for element size in HTML)
        var wrapperH = d.clientHeight + d_border_height;
        wrapper.style.height = wrapperH + "px";
        
        // Set height of angular content to accomodate size of angular dividers
        var angH = angContent.clientHeight;
        angContent.style.height = angH - wrapperH + "px";
    }
    showSectionList();
}
