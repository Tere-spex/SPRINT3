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
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var nameN = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword").innerHTML;
var errorName = document.getElementById("errorName").innerHTML;
var errorPhone = document.getElementById("errorPhone").innerHTML;

// Exercise 6
function validate() {
  let inputName = nameN.value;
  let inputPassword = password.value;
  let inputPhone = phone.value;
  // Validate fields entered by the user: name, phone, password, and email
  window.addEventListener("keypress", () => {
    if (inputPhone == "" || inputPhone.length < 3) {
      alert(errorPhone);
    }
  });
  window.addEventListener("keypress", () => {
    if (inputPassword == "" || inputPassword.length < 3) {
      alert(errorPassword);
    }
  });
  window.addEventListener("keypress", () => {
    if (inputName == "" || inputName.length < 3) {
      alert(errorName);
    }
  });
}

console.log(typeof phone.value); //string
console.log(typeof parseInt(phone.value)); //number
//|| password["value"].type !== password
