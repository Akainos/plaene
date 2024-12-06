const PopUp1002 = document.getElementById("PopUp1002");
const PopUp1003 = document.getElementById("PopUp1003");
const PopUp1004 = document.getElementById("PopUp1004");
const PopUp1006 = document.getElementById("PopUp1006");

function showRaum1002() {
    closeAllPopUps();
    PopUp1002.style.display = "block";
}

function showRaum1003() {
    closeAllPopUps();
    PopUp1003.style.display = "block";
}

function showRaum1004() {
    closeAllPopUps();
    PopUp1004.style.display = "block";
}

function showRaum1006() {
    closeAllPopUps();
    PopUp1006.style.display = "block";
}

function closeAllPopUps() {
    PopUp1002.style.display = "none";
    PopUp1003.style.display = "none";
    PopUp1004.style.display = "none";
    PopUp1006.style.display = "none";
}