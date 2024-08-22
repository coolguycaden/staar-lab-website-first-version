var teamButton = document.getElementById("team-button");

//const dropdownButtons = document.getElementsByClassName("navigation-dropdown-button");

teamButton.addEventListener("mouseover", hovered);

function printClick(){
    console.log("clicked!");
}

function hovered(){
    console.log("hovered!");
}


// MEDIA QUERIES | RESPONSIVE DESIGN


// :) This section of commenting ends at the next ":)"
// This section checks for media size, IF the media matches
// 780px then the media is a mobile device and the website needs to hide
// certain items and change layout

//holds max-width for media 
var viewportSize = window.matchMedia("(max-width: 780px)"); 

function checkForMobileDevice(viewportSize) {
    
    //If media query matches, hide navigation bar items...,
    //only show tab menu on navigation bar and logo
    if(viewportSize.matches) {
        
    }
}

checkForMobileDevice(viewportSize);

viewportSize.addEventListener("change", function() {
    checkForMobileDevice(viewportSize);
})

// :) End of commenting for above section

