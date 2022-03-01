// Get the input fields
let nameN = document.querySelector(".name");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let address = document.querySelector(".address");
let phone = document.querySelector(".phone");

// Get the error elements
let errorName = document.getElementById("errorName").innerHTML;
let errorLastName = document.getElementById("errorLastName").innerHTML;
let errorEmail = document.getElementById("errorEmail").innerHTML;
let errorPassword = document.getElementById("errorPassword").innerHTML;
let errorAdress = document.getElementById("errorAddress").innerHTML;
let errorPhone = document.getElementById("errorPhone").innerHTML;

// Exercise 6
function validate() {
 // Validate fields entered by the user: name, phone, password, and email
  window.addEventListener("keypress", () => {nameN.value});
  window.addEventListener("keypress", () => {lastName.value});
  window.addEventListener("keypress", () => {email.value});
  window.addEventListener("keypress", () => {password.value});
  window.addEventListener("keypress", () => {address.value});
  window.addEventListener("keypress", () => {Number(phone.value)});

  let filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (nameN.value  == ""  || nameN["value"].length < 3|| nameN.value.match(/\d+/) !== null) {
    nameN.style.border = "thin solid #FF0000";
    document.getElementById("errorName").style.display = "inline";
  }

  if (lastName.value  == ""  || lastName["value"].length < 3|| lastName.value.match(/\d+/) !== null) {
    lastName.style.border = "thin solid #FF0000";
    document.getElementById("errorLastName").style.display = "inline"; 
  }

  if (!filterEmail.test(email.value) || email.value  == ""  || email["value"].length < 3){
    email.style.border = "thin solid #FF0000";
    document.getElementById("errorEmail").style.display = "inline"; 
  } 

  if (password.value  == ""  || password["value"].length < 3 || !password.value.match(/[a-zA-Z0-9]/gi)) {
    password.style.border = "thin solid #FF0000";
    document.getElementById("errorPassword").style.display = "inline"; 
  }

  if (address.value == "" || address["value"].length < 3 || !address.value.match(/[a-zA-Z0-9]/gi)) {
    address.style.border = "thin solid #FF0000";
    document.getElementById("errorAddress").style.display = "inline"; 
  }

  if (phone.value  == "" || phone["value"].length < 3 || phone.value.match(/\d+/) == null) {
    phone.style.border = "thin solid #FF0000";
    document.getElementById("errorPhone").style.display = "inline"; 
  }
}



