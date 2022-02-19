// Get the input fields
var password = document.getElementById("password");
var phone = document.querySelector('.phone');
var nombre = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 6
// Validate fields entered by the user: name, phone, password, and email
function Validate() {
    var usuarios = [
        {nombre:'Ana', clave:1234, telefono:456},
        {nombre:'Juan', clave:1234, telefono:456},
        ];

    cliente = usuarios[0][nombre];
    clave = usuarios[1][clave];
    telefono = usuarios[1][telefono];

    if (password != clave  || password == '') {
        alert(errorPassword);
    }else if (nombre != cliente  || nombre == '') {
        alert(errorName);
    } else if (phone != telefonno || phone == '') {
        alert(errorPhone);
    } else {
        document.write('Acceso permitido');
    }
}