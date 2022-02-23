// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    if (password.type === "password") {
        password.type = "text";
    } else {
        alert(errorPassword);
    }

    if (phone.type === "phone") {
        phone.type = "number";
    } else {
        alert(errorPhone);
    }

    if (name.type === "name") {
        name.type = "text";
    } else {
       alert(errorName);
    }
}