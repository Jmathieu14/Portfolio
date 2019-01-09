function calcScrollDist(selector, idx) {
    var elements = document.querySelectorAll(selector);
    // If is valid call
    if (idx < elements.length) {
        var element = elements[idx];
        var dist = 0;
        var prevElement = element.previousElementSibling;
        var limit = 1000;
        var ctr = 0;
        while (prevElement != null && ctr < limit) {
            dist += prevElement.offsetHeight;
            prevElement = prevElement.previousElementSibling;
            ++ctr;
        }
        return dist;
    } else {
        console.log("Element at index " + idx + " does not exist for selector " + selector);
    }
}

function calcScrollDistOfFirst(selector) {
    calcScrollDist(selector, 0);
}
