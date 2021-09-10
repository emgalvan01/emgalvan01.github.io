"use strict";
/*********************************************************************
***
*Original Author:     Emmanuel Galvan                              
*Date Created:        09/03/2021                               
*Version:             0.0                                   
*Date Last Modified:  09/03/2021                            
*Modified by:         Emmanuel Galvan                                 
*Modification log:  

    Version 0.0 - 09/03/2021 - Created a new JS file. Created mod log. Copied over the signup code from main JS to here
***
******************************************************************** */

const $ = selector => document.querySelector(selector);

/************* SIGN UP FORM ***************/
const joinList = evt => {
    // get user entries from text boxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;
    
    // check user entries
    let isValid = true;
    if (email1 == "") { 
        $("#email_1_error").textContent = "* Please Enter your Email.";
        isValid = false;
    } else { 
        $("#email_1_error").textContent = ""; 
    }

    if (email1 != email2) { 
        $("#email_2_error").textContent = "* Emails do not match.";
        isValid = false;
    } else { 
        $("#email_2_error").textContent = ""; 
    }

    if (firstName == "") {
        $("#first_name_error").textContent = "* First name is required.";
        isValid = false;
    } else { 
        $("#first_name_error").textContent = ""; 
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault();
    }
    if (email1 == email2 && firstName != ""){
        alert("Success! You are signed up!"); // Alert seems to display twice
    }
    
};

const clearForm = () => {
    // clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*"; 

    // set focus on first text box after resetting the form
    $("#first_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#submit").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);
});