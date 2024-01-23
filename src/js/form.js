function enviarFormulario() {
    var formulario = document.getElementById('myForm'); //Nuestro ID del formulario
    var respuestaDiv = document.getElementById('respuesta'); //Elemento del DOM donde se muestra la respuesta

    
    if (formulario.checkValidity()) { //Lo utilizamos para que verificar que cumple todos los campos
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;

        respuestaDiv.innerHTML = `Formulario enviado:<br>Nombre: ${nombre}<br>Email: ${email}`;
    } else {
        respuestaDiv.innerHTML = "Por favor, completa el formulario correctamente.";
    }
}