// Credits to Materials Theory Group (https://www.materials-theory.group/home) for design inspiration
// Contributors: Caden Allen


//Useful Docs:

//https://developer.mozilla.org/en-US/
//https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
//https://swimm.io/learn/code-documentation/code-documentation-javascript-methods-and-best-practices

//Organized by the following categories (use CLTR + F and search category names)
// HOVER DROPDOWN ICONS FUNCTIONALITY
// MEDIA QUERIES | RESPONSIVE DESIGN
// ROTATING GALLERY




// HOVER DROPDOWN ICONS FUNCTIONALITY


/**
 * Makes Navigation-bar hover boxes have opacity of 1 (to be visible)
 * 
 * @param {string} element - The element (item that is hovered over) to make visible
 * 
 * @returns {void}
 */
function makeVisible(element){
    console.log(element);
    document.getElementById(element).setAttribute("style", "opacity: 1");
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



/* ROTATING GALLERY */

const IMAGES_LOCATION = "./assets/pictures/gallery-pictures/img-";
const NUMBER_OF_IMAGES = 2;

/**
 * Makes an image gallery that changes images every 5 seconds
 * 
 * @requires IMAGES_LOCATION - location of images to cycle through
 * @requires NUMBER_OF_IMAGES - number of images stored in IMAGES_LOCATION
 * 
 * @returns {void}
 */
async function rotateImages() {

    //
    var i = 1;
    while(i <= NUMBER_OF_IMAGES){

        //Sets the new temporary image
        var newImage = IMAGES_LOCATION + i + ".png";

        //This MUST have ID set here manually to work
        document.getElementById("rotating-image").src = newImage;
        
        //This forces a wait of 5 seconds between changing pictures
        await new Promise(r => setTimeout(r, 5000));

        //Resets the image gallery back to the first image
        if(i + 1 > NUMBER_OF_IMAGES){
            i = 1;
        } else {
            i++;
        }
    }

}



