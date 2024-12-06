const PopUp4101 = document.getElementById("PopUp4101");
const PopUp4103 = document.getElementById("PopUp4103");
const PopUp4104 = document.getElementById("PopUp4104");
const PopUp4105 = document.getElementById("PopUp4105");

function showRaum4101() {
    closeAllPopUps();
    PopUp4101.style.display = "block";
}

function showRaum4103() {
    closeAllPopUps();
    PopUp4103.style.display = "block";
}

function showRaum4104() {
    closeAllPopUps();
    PopUp4104.style.display = "block";
}

function showRaum4105() {
    closeAllPopUps();
    PopUp4105.style.display = "block";
}

function closeAllPopUps() {
    PopUp4101.style.display = "none";
    PopUp4103.style.display = "none";
    PopUp4104.style.display = "none";
    PopUp4105.style.display = "none";
}