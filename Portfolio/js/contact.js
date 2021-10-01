"use strict";
/************************************************************************
*Original Author:     Emmanuel Galvan                              
*Date Created:        10/01/2021                               
*Version:             0.0                                   
*Date Last Modified:  10/01/2021                            
*Modified by:         Emmanuel Galvan                                 
*Modification log:  

    Version 0.0 - 10/01/2021 - Created this JS file, Added mod log, imported js file from a previous project
                               added clearForm() at the end of the else statement at the 
                               end of the JoinList() to clear the form once submitted

**********************************************************************/

const $ = selector => document.querySelector(selector);

/************* Contact Us Form ***************/

const joinList = evt => {
    const name = $("#first_name").value;
    const email = $("#email_1").value;
    const phone = $("#mobile").value;
    const comments = $("#comments").value;

    // regular expressions for validity testing
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    let isValid = true;
    if (name == "") {
        $("#first_name_error").textContent = "* First name is required.";
        isValid = false;
    } 
    else { 
        $("#first_name_error").textContent = ""; 
    }

    if (email == "" || !emailPattern.test(email)) { 
        $("#email_1_error").textContent = "* Please Enter a valid Email.";
        isValid = false;
    } 
    else { 
        $("#email_1_error").textContent = ""; 
    }

    if (phone == "" || !phonePattern.test(phone)) { 
        $("#phone_error").textContent = "* Please enter a phone number in NNN-NNN-NNNN format.";
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
        alert("Preparing Email");
        clearForm();
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