const PopUpFoyer = document.getElementById("PopUpFoyer");

function showRaumFoyer() {
    closeAllPopUps();
    PopUpFoyer.style.display = "block";
}

function closeAllPopUps() {
    PopUpFoyer.style.display = "none";
}