function enviarFormulario() {
    var formulario = document.getElementById('myForm');
    var respuestaDiv = document.getElementById('respuesta');

    // Validar el formulario (puedes agregar más validaciones según tus necesidades)
    if (formulario.checkValidity()) {
        // Obtener datos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;

        // Aquí puedes realizar alguna acción con los datos (enviar a un servidor, procesar, etc.)
        // En este ejemplo, simplemente mostramos la respuesta en la página
        respuestaDiv.innerHTML = `Formulario enviado:<br>Nombre: ${nombre}<br>Email: ${email}`;
    } else {
        // Si el formulario no es válido, mostrar mensajes de error predeterminados
        respuestaDiv.innerHTML = "Por favor, completa el formulario correctamente.";
    }
}