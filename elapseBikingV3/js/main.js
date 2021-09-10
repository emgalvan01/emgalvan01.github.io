"use strict";
/*********************************************************************
***
*Original Author:     Emmanuel Galvan                              
*Date Created:        08/27/2021                               
*Version:             1.0                                   
*Date Last Modified:  09/03/2021                            
*Modified by:         Emmanuel Galvan                                 
*Modification log:  

    Version 0.0 - 08/27/2021 - Added Mod Log, pulled js email form from past exercises, renamed ID in DOM to
                               match the button ID. Added else statement to alert a message.
    Version 1.0 - 09/03/2021 - Moved SignUp javascript to a new file. Added new code to spotlight each picture
    s                          whenever someone clicks on the spotlight button.
                               
***
******************************************************************** */

const $ = selector => document.querySelector(selector);

/************* Spotlight Pictures ***************/

document.addEventListener("DOMContentLoaded", () => {
    var Spotlight = $("#spotlight");

    // preload images
    var links = $("#image_list").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // change src to spotlight a new picture
    $("#image1").addEventListener("click", () => {
        Spotlight.src = "media/ebikeStealth.jpg";
    });
    $("#image2").addEventListener("click", () => {
        Spotlight.src = "media/eMountainBike.jpg";
    });
    $("#image3").addEventListener("click", () => {
        Spotlight.src = "media/roadBike.jpg";
    });
    $("#image4").addEventListener("click", () => {
        Spotlight.src = "media/mountainBike.jpg";
    });
    $("#image5").addEventListener("click", () => {
        Spotlight.src = "media/cruiseBike.jpg";
    });
    $("#image6").addEventListener("click", () => {
        Spotlight.src = "media/kidsCruiserBike.jpg";
    });

});