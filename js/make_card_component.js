var mycardrow = this.document.getElementById("card-sec");

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
    mycardrow.insertAdjacentHTML("beforeEnd", imgCardTemplate);
    // console.log(imgCardTemplate);
}

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
    mycardrow.insertAdjacentHTML("beforeEnd", imgCardTemplate);
}
