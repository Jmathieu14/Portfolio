var ANGLR_DIV_SEL = ".angular-divider";
// Properly format angular dividers on given page
function angularDivSetup() {
    var dividers = document.querySelectorAll(ANGLR_DIV_SEL);
    // Iterate through each angular divider on page
    for (var i = 0; i < dividers.length; ++i) {
        var d = dividers[i];
        var d_width = d.clientWidth;
        var brdr_r_css = d_width + "px solid black";
        var prev_ang_sect = d.previousElementSibling;
        var d_border_height = prev_ang_sect.clientHeight / 10;
        var brdr_top_css = d_border_height + "px solid white";
        d.style.width = "0px";
        d.style.borderRight = brdr_r_css;
        d.style.borderTop = brdr_top_css;
        var n_height = d.clientHeight + (d_border_height * 2);
        if (i !== 0) {
            var p = d.parentElement;
//            p.style.top = n_height + "px";
            p.style.paddingTop = n_height + "px";
        }
    }
}
