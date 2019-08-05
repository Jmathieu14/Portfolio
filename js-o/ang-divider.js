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
        var wrapper = d.parentElement;
        var angContent = wrapper.previousElementSibling;
        var dBorderH = wrapper.clientHeight - d.clientHeight;
        
        // Set element d's width to 0, b/c border width takes up space
        d.style.width = "0px";
        d.style.borderRight = wrapper.clientWidth + "px solid black";
        d.style.borderTop = dBorderH + "px solid transparent";
    }
    showSectionList();
}
