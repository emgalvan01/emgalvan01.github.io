"use strict";
/*********************************************************************
***
*Original Author:     Emmanuel Galvan                              
*Date Created:        09/03/2021                               
*Version:             0.0                                   
*Date Last Modified:  09/03/2021                            
*Modified by:         Emmanuel Galvan                                 
*Modification log:  

    Version 0.0 - 09/03/2021 - Created a new JS file. Created mod log. Used past assignment to create the JS.
***
******************************************************************** */

// the event handler for the click event of each <a> element
const toggle = evt => {
    const linkElement = evt.currentTarget;                 // get the clicked link element
    const h2Element = linkElement.parentNode;              // get the h2 tag for the <a> tag
    const divElement = h2Element.nextElementSibling;       // get h2's sibling div

    // h2Element.classList.toggle("minus");
    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class");
    } else {
        h2Element.className="minus";
    }

    // divElement.classList.toggle("open");
    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }

    evt.preventDefault();   // cancel default action of the <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the <a> tags
    const linkElements = accordion.querySelectorAll("#accordion a");
    
    // attach event handler for each <a> tag	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }      
});