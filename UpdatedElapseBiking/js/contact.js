"use strict";
/*********************************************************************
***
*Original Author:     Emmanuel Galvan                              
*Date Created:        09/03/2021                               
*Version:             0.0                                   
*Date Last Modified:  09/03/2021                            
*Modified by:         Emmanuel Galvan                                 
*Modification log:  

    Version 0.0 - 09/03/2021 - Created a new JS file. Created mod log. Copied over the signup code from main JS to here,
                               Added a new constant for comments. Changed the comparison values to 
                               correspond to the new constants I have. Changed a couple ID selectors
***
******************************************************************** */

const $ = selector => document.querySelector(selector);

/************* Contact Us Form ***************/

const joinList = evt => {
    const name = $("#first_name").value;
    const email = $("#email_1").value;
    const phone = $("#mobile").value;
    const comments = $("#comments").value;

    let isValid = true;
    if (name == "") {
        $("#first_name_error").textContent = "* First name is required.";
        isValid = false;
    } 
    else { 
        $("#first_name_error").textContent = ""; 
    }

    if (email == "") { 
        $("#email_1_error").textContent = "* Please Enter your Email.";
        isValid = false;
    } 
    else { 
        $("#email_1_error").textContent = ""; 
    }

    if (phone == "" || isNaN(phone)) { 
        $("#phone_error").textContent = "* Please Enter a phone number.";
        isValid = false;
    } 
    else { 
        $("#phone_error").textContent = ""; 
    }

    if (comments == "") { 
        $("#comment_error").textContent = "* Please Enter your comment.";
        isValid = false;
    } 
    else { 
        $("#comment_error").textContent = ""; 
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault();
    }
    else{
        alert("Message has been sent!"); // Alert seems to display twice
    }
    
};

const clearForm = () => {
    // clear text boxes
    $("#email_1").value = "";
    $("#mobile").value = "";
    $("#first_name").value = "";
    $("#comments").value = "";

    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#phone_error").textContent = "*";
    $("#first_name_error").textContent = "*";
    $("#comments_error").textContent = "*"; 

    // set focus on first text box after resetting the form
    $("#first_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#submit").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);
});