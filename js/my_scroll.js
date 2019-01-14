function calcScrollDist(selector, idx) {
    var elements = document.querySelectorAll(selector);
    // If is valid call
    if (idx < elements.length) {
        var element = elements[idx];
        var dist = 0;
        var prevElement = element.previousElementSibling;
        var limit = 2000;
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
    return calcScrollDist(selector, 0);
}

// Define global list for distance intervals for smooth js transitions
var distIntervalList = [];
// Define global list for time intervals for smooth js transitions
var timeIntervalList = [];
// Define global index for transitions
var curGlobalIndex = 0;
// Scroll from start to end vertically and smoothly, in intervals of 'interval' time and over a maximum time of
// 'maxTime', and after any specified delay of 'myDly' ms.
function smoothVerticalScroll(start, end, interval, maxTime, myDly) {
    // Reset global index
    curGlobalIndex = 0;
    if (end < start) {
        var temp = end;
        end = start;
        start = temp;
    }
    var dist = end - start;
    var intervalCount = maxTime/interval;
    var distInterval = dist/intervalCount;
    console.log("Total dist to scroll: " + dist + "px");
    console.log("Distance intervals: " + distInterval + "px every " + interval + "ms over " + maxTime + "ms");
    for (var k = 0; k < intervalCount; ++k) {
        if (k == intervalCount - 1) {
            distIntervalList[k] = end;
            timeIntervalList[k] = maxTime + myDly;
        } else {
            distIntervalList[k] = start + (k * distInterval);
            timeIntervalList[k] = myDly + (interval * k);
        }
    }
    for (var i = 1; i < intervalCount; ++i) {
        setTimeout(function() {
            ++curGlobalIndex;
            window.scrollTo(0, distIntervalList[curGlobalIndex]);
        }, timeIntervalList[curGlobalIndex]);
    }
}
