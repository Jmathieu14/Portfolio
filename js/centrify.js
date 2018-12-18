// Center element at index of given selector relative to parent element
function centerVertically(sel, offset, index) {
    var cElement = document.querySelectorAll(sel)[index];
    // Debug: log code used to select element
    // console.log("var cElement = document.querySelectorAll('" + sel + "')[" + index + "];")
    var pElement = cElement.parentElement;
    var cHeight = cElement.offsetHeight;
    var pHeight = pElement.offsetHeight;
    var newTopBuffer = (pHeight - cHeight)/2;
    // console.log("Parent element height is " + pHeight + "px")
    // console.log("Child element height is " + cHeight + "px");
    cElement.setAttribute("style", "top: " + newTopBuffer + "px;");
}

// Center the first element of all elements that match the given selector relative to the parent element
// Offset is the amount needed to center properly (due to floating elements)
function centerFirstVerically(sel, offset) {
    centerVertically(sel, offset, 0);
}
