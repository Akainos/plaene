const PopUp5104 = document.getElementById("PopUp5104");
const PopUp5108 = document.getElementById("PopUp5108");
const PopUpFlur = document.getElementById("PopUpFlur");

function showRaum5104() {
    closeAllPopUps();
    PopUp5104.style.display = "block";
}

function showRaum5108() {
    closeAllPopUps();
    PopUp5108.style.display = "block";
}

function showRaumXY() {
    closeAllPopUps();
    PopUpFlur.style.display = "block";
}

function closeAllPopUps() {
    PopUp5104.style.display = "none";
    PopUp5108.style.display = "none";
    PopUpFlur.style.display = "none";
}