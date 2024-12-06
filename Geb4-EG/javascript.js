const PopUpFoyer = document.getElementById("PopUpFoyer");
const PopUp4001 = document.getElementById("PopUp4001");
const PopUp4003 = document.getElementById("PopUp4003");
const PopUp4004 = document.getElementById("PopUp4004");
const PopUp4008 = document.getElementById("PopUp4008");
const PopUp4009 = document.getElementById("PopUp4009");
const PopUp4010 = document.getElementById("PopUp4010");

function showRaumFoyer() {
    closeAllPopUps();
    PopUpFoyer.style.display = "block";
}

function showRaum4001() {
    closeAllPopUps();
    PopUp4001.style.display = "block";
}

function showRaum4003() {
    closeAllPopUps();
    PopUp4003.style.display = "block";
}

function showRaum4004() {
    closeAllPopUps();
    PopUp4004.style.display = "block";
}

function showRaum4008() {
    closeAllPopUps();
    PopUp4008.style.display = "block";
}

function showRaum4009() {
    closeAllPopUps();
    PopUp4009.style.display = "block";
}

function showRaum4010() {
    closeAllPopUps();
    PopUp4010.style.display = "block";
}

function closeAllPopUps() {
    PopUpFoyer.style.display = "none";
    PopUp4001.style.display = "none";
    PopUp4003.style.display = "none";
    PopUp4004.style.display = "none";
    PopUp4008.style.display = "none";
    PopUp4009.style.display = "none";
    PopUp4010.style.display = "none";
}