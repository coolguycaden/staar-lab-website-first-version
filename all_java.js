// Credits to Materials Theory Group for design inspiration
// Contributors: Caden Allen


//Useful Docs:

//https://developer.mozilla.org/en-US/
//https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript


//Organized by the following categories (use CLTR + F and search category names)
// HOVER DROPDOWN ICONS FUNCTIONALITY
// MEDIA QUERIES | RESPONSIVE DESIGN




// HOVER DROPDOWN ICONS FUNCTIONALITY

// :/ This section of commenting ends at the next ":/"



//var teamButton = document.getElementById("team-button");

//const dropdownButtons = document.getElementsByClassName("navigation-dropdown-button");

//teamButton.addEventListener("mouseover", hovered);
//var contextMenuForTeam = document.getElementById("team-button");


/*window.addEventListener("DOMContentLoaded", (event) => {
    const NAVIGATION_BUTTONS = ["team-button", "research-button"]
    NAVIGATION_BUTTONS.forEach((element) => 
        document.getElementsByClassName(element)[0]
        .addEventListener("mouseover", (event) => {
            hovered(element + "-hover");
        })
    );
        
});*/

//const NAVIGATION_BUTTONS_HOVER = ["team-button-hover", "research-button-hover"];
//NAVIGATION_BUTTONS_HOVER.forEach((element) => document.getElementById(element).setAttribute("display", "none"));


function printClick(){
    console.log("clicked!");
}

function hovered(elementClassName){
    var result = document.getElementsByClassName(elementClassName)[0]
    result.setAttribute("display", "none");
    console.log(result.getAttribute("display"));
    
    
}

// :/ End of commenting for above section



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

