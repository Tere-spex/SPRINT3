// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameN = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword").innerHTML;
var errorName = document.getElementById('errorName').innerHTML;  
var errorPhone = document.getElementById('errorPhone').innerHTML;  


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    window.addEventListener("keypress", () => {password.value});
    window.addEventListener("keypress", () => {phone.value});
    window.addEventListener("keypress", () => {nameN.value});

    if (password.value  == ""  || password["value"].length < 3) {
        alert(errorPassword);
    }

   if (phone.value  == "" || phone["value"].length < 3) {
        alert(errorPhone);
    }

    if (nameN.value  == ""  || nameN["value"].length < 3) {
        alert(errorName);
    }
 }

console.log(typeof phone.value);//string
console.log(typeof parseInt(phone.value));//number

//|| typeof phone.value !== "number"
//|| typeof nameN.value !== "text"

   