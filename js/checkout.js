// En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:
// - Tots els camps són obligatoris.
// - Tots els camps han de tenir almenys 3 caràcters.
// - El nom i cognoms han de contenir només lletres.
// - El telèfon ha de contenir només números.
// - La contrasenya ha d'incloure números i lletres.
// - L'email ha de tenir format d'email.
// Quan l'usuari introdueixi un camp que no compleixi les condicions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge en la part inferior a manera de feedback a l'usuari, perquè sàpiga com rectificar.

// Ajuda: podràs acolorir en la vora de l'input vermell i mostrar el missatge d'error manipulant el dom, encara que també pots usar la classe is-invalid de bootstrap.

// Get the input fields
let password = document.querySelector(".password");
let phone = document.querySelector(".phone");
let nameN = document.querySelector(".name");
let email = document.querySelector(".email");
let lastName = document.querySelector(".lastname");

// Get the error elements
let errorPassword = document.getElementById("errorPassword").innerHTML;
let errorName = document.getElementById("errorName").innerHTML;
let errorPhone = document.getElementById("errorPhone").innerHTML;
let errorEmail = document.getElementById("errorEmail").innerHTML;
let errorLastName = document.getElementById("errorLastName").innerHTML;

// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email
  window.addEventListener("keypress", () => {password.value});
  window.addEventListener("keypress", () => {Number(phone.value)});
  window.addEventListener("keypress", () => {nameN.value});
  window.addEventListener("keypress", () => {email.value});
  window.addEventListener("keypress", () => {lastName.value});

  if (nameN.value  == ""  || nameN["value"].length < 3|| typeof nameN.value !== String) {
      console.log(errorName);
  }

  if (password.value  == ""  || password["value"].length < 3 || typeof password.value !== Number) {
      console.log(errorPassword);
  }

 if (phone.value  == "" || phone["value"].length < 3) {
      console.log(errorPhone);
  }

if (email.value  == ""  || email["value"].length < 3) {
    console.log(errorEmail);
  }

 if (lastName.value  == ""  || lastName["value"].length < 3|| typeof lastName.value !== String) {
    console.log(errorLastName);
  }
} 


