var sections = [];

// Also returns the id # for the newly added section
function addSection() {
    sections.push({cards:[], currentCards:[0, 1]});
    return sections.length - 1;
}

function showCurCards(sectionID) {
    var curCards = sections[sectionID].currentCards;
    var myCards = sections[sectionID].cards;
    for (var x = 0; x < curCards.length; x++) {
        if (typeof myCards[curCards[x]] !== "undefined") {
            myCards[curCards[x]].className+=" show";
        } else {
            console.log(myCards);
            console.log(sectionID);
        }
    }
}

// Show all current cards per card section
function showCurCardsPerSection() {
    for (var x = 0; x < sections.length; x++) {
        showCurCards(x);
    }
}

function hideCurCards(sectionID) {
    var curCards = sections[sectionID].currentCards;
    var myCards = sections[sectionID].cards;
    for (var x = 0; x < curCards.length; x++) {
        var cName = myCards[curCards[x]].className;
        myCards[curCards[x]].className = cName.replace(" show", "");
    }
    return true;
}
function goToNextCards(sectionID) {
    var curCards = sections[sectionID].currentCards;
    var myCards = sections[sectionID].cards;
    console.log(sections[sectionID].cards.length);
    console.log(sections[sectionID].currentCards);
    if (!(curCards[0]+2 >= myCards.length)) {
        if (curCards.length == 1 || curCards[1]+2 >= myCards.length) {
            var nextCards = [curCards[0]+2];
        } else {
            var nextCards = [curCards[0]+2,curCards[1]+2];
        }
        if (hideCurCards(sectionID)) {
            curCards = nextCards;
            showCurCards(sectionID);
        }
    }
}
function goToPrevCards(sectionID) {
    var curCards = sections[sectionID].currentCards;
    var myCards = sections[sectionID].cards;
    if (curCards.length == 1) {
        var prevCards = [curCards[0]-2,curCards[0]-1];
        if (hideCurCards(sectionID)) {
            curCards = prevCards;
            showCurCards(sectionID);
        }
    }
    if (curCards.length != 1 && !(curCards[1]-2 < 0)) {
        if (curCards[0]-2 < 0) {
            var prevCards = [curCards[1]-2];
        } else {
            var prevCards = [curCards[0]-2,curCards[1]-2];
        }
        if (hideCurCards(sectionID)) {
            curCards = prevCards;
            showCurCards(sectionID);
        }
    }
}
