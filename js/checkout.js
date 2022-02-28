// En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:
// - El nom i cognoms han de contenir només lletres.
// - El telèfon ha de contenir només números.
// - La contrasenya ha d'incloure números i lletres.
// - L'email ha de tenir format d'email.
// Quan l'usuari introdueixi un camp que no compleixi les condicions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge en la part inferior a manera de feedback a l'usuari, perquè sàpiga com rectificar.

// Ajuda: podràs acolorir en la vora de l'input vermell i mostrar el missatge d'error manipulant el dom, encara que també pots usar la classe is-invalid de bootstrap.

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
      console.log(errorName);
  }

  if (lastName.value  == ""  || lastName["value"].length < 3|| lastName.value.match(/\d+/) !== null) {
    console.log(errorLastName);
  }

   if (!filterEmail.test(email.value) || email.value  == ""  || email["value"].length < 3){
     console.log(errorEmail);
   } 

  if (password.value  == ""  || password["value"].length < 3) {
    console.log(errorPassword);
  }

  if (address.value == "" || address["value"].length < 3) {
    console.log(errorAdress);
  }

 if (phone.value  == "" || phone["value"].length < 3 || phone.value.match(/\d+/) == null) {
      console.log(errorPhone);
  }
}



