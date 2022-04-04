// Get the input fields
let inputName = document.getElementById("fName");
let inputLastN = document.getElementById("fLastN");
let inputEmail = document.getElementById("fEmail");
let inputPassword = document.getElementById("fPassword");
let inputAddress = document.getElementById("fAddress");
let inputPhone = document.getElementById("fPhone");

// Get the error elements
let errorName = document.getElementById("errorName");
let errorLastN = document.getElementById("errorLastN");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorAdress = document.getElementById("errorAddress");
let errorPhone = document.getElementById("errorPhone");

//Expresiones regulares
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  name: /^[a-zA-ZÀ-Ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\(?(\d{3})\)?[-]?(\d{2})[-]?(\d{2})[-]?(\d{2})$/,
  address: /^[#.0-9a-zA-Z\s,-]+$/
}

// Exercise 6
function validate() {
// Validate fields entered by the user: name, phone, password, and email
  if (inputName.value == "" || inputName.value.length < 3|| !expresiones.name.test(inputName.value)) {
    inputName.style.border = "thin solid #FF0000";
    errorName.style.display = "inline";
  }else{
    inputName.style.border = "thin solid #00FF00";
    errorName.style.display = "none";
  };

  if (inputLastN.value  == "" || inputLastN.value.length < 3|| !expresiones.name.test(inputLastN.value)) {
    inputLastN.style.border = "thin solid #FF0000";
    errorLastN.style.display = "inline"; 
  }else{
    inputLastN.style.border = "thin solid #00FF00";
    errorLastN.style.display = "none";
  };

  if (inputEmail.value  == "" || inputEmail.value.length < 3 || !expresiones.email.test(inputEmail.value)) {
    inputEmail.style.border = "thin solid #FF0000";
    errorEmail.style.display = "inline"; 
  } else {
    inputEmail.style.border = "thin solid #00FF00";
    errorEmail.style.display = "none";
  };

  if (inputPassword.value  == "" || inputPassword.value.length < 3 || !expresiones.password.test(inputPassword.value)) {
    inputPassword.style.border = "thin solid #FF0000";
    errorPassword.style.display = "inline"; 
  }else{
    inputPassword.style.border = "thin solid #00FF00";
    errorPassword.style.display = "none";
  };

  if (inputAddress.value == "" || inputAddress.value.length < 3 || !expresiones.address.test(inputAddress.value)) {
    inputAddress.style.border = "thin solid #FF0000";
    document.getElementById("errorAddress").style.display = "inline"; 
  }else{
    inputAddress.style.border = "thin solid #00FF00";
    document.getElementById("errorAddress").style.display = "none";
  };

  if (inputPhone.value  == "" || inputPhone.value.length < 3 || !expresiones.phone.test(inputPhone.value)) {  
    inputPhone.style.border = "thin solid #FF0000";
    document.getElementById("errorPhone").style.display = "inline"; 
  }else{
    inputPhone.style.border = "thin solid #00FF00";
    document.getElementById("errorPhone").style.display = "none";
  };
}

