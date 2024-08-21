var teamButton = document.getElementById("team-button");

//const dropdownButtons = document.getElementsByClassName("navigation-dropdown-button");

teamButton.addEventListener("mouseover", hovered);

function printClick(){
    console.log("clicked!");
}

function hovered(){
    console.log("hovered!");
}