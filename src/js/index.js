type="text/javascript">
//Metodo Generación Formulario
function GeneraForm(){
    ////Crear el objeto formulario
    let formulario=document.createElement("form");

    ////Crear el objeto label de titulo
    let titulo=document.createElement("label");

    ////Crear el objeto caja de texto Nombres
    let cajaTextNombre=document.createElement("input");

    ////Crear el objeto caja de texto Apellidos
    let cajaTextApellidos=document.createElement("input");

    ////Crear el objeto caja de texto Email
    let cajaTextEmail=document.createElement("input");

    ////Crear el objeto caja de texto Cp
    let cajaTextAsunto=document.createElement("input");

    ////Crear el objeto area de texto Nº
    let cajaTextMensaje=document.createElement("input");

    ////Crear el objeto area de texto Poblacion
    let cajaTextPoblacion=document.createElement("input");

        ////Crear el objeto area de texto Ciudad
    let cajaTextCiudad=document.createElement("input");

    ////Crear el objeto boton
    let boton=document.createElement("input");

    ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");//Asignar el atributo method
        formulario.setAttribute('action', "");//Asignar el atributo action
        formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Nombres
        cajaTextNombre.setAttribute('type', "text");//Asignar el atributo type
        cajaTextNombre.setAttribute('placeholder', "Nombre");//Asignar el atributo placeholder
        cajaTextNombre.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Apellidos
        cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Email
        cajaTextEmail.setAttribute('type', "text");//Asignar el atributo type
        cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
        cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Codigo Postal
        cajaTextCP.setAttribute('type', "text");//Asignar el atributo type
        cajaTextCP.setAttribute('placeholder', "CP");//Asignar el atributo placeholder
        cajaTextCP.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
////Asignar atributos al objeto caja de texto de N
        cajaTextN.setAttribute('type', "text");//Asignar el atributo type
        cajaTextN.setAttribute('placeholder', "N");//Asignar el atributo placeholder
        cajaTextN.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        
        ////Asignar atributos al objeto caja de texto de Poblacion
        cajaTextPoblacion.setAttribute('type', "text");//Asignar el atributo type
        cajaTextPoblacion.setAttribute('placeholder', "N");//Asignar el atributo placeholder
        cajaTextPoblacion.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        
        ////Asignar atributos al objeto caja de texto de Ciudad
        cajaTextCiudad.setAttribute('type', "text");//Asignar el atributo type
        cajaTextCiudad.setAttribute('placeholder', "Ciudad");//Asignar el atributo placeholder
        cajaTextCiudad.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto Condiciones y terminos

        ////Asignar atributos al objeto boton
        boton.setAttribute('type', "button");//Asignar el atributo type	
        boton.setAttribute('value', "Validar");//Asignar el atributo value
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick

        titulo.innerHTML='<h1>Contacto</h1>';//Asignar el texto de titulo en el objeto titulo
        formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        formulario.appendChild(cajaTextNombre);//Agregar el objeto caja de texto Nombres al objeto formulario
        formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
        formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
        formulario.appendChild(cajaTextCP);//Agregar el objeto caja de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextN);//Agregar el objeto area de texto del Mensaje al objeto formulario
        formulario.appendChild(cajaTextPoblacion);//Agregar el objeto caja de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextCiudad);//Agregar el objeto area de texto del Mensaje al objeto formulario  




        formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
        document.getElementById('ContentFormulario').appendChild(formulario);//Agregar el formulario a la etiquete con el ID			
}






function mostrarDescripcion(id) {
var descripciones = document.querySelectorAll('.descripcion');
descripciones.forEach(function (element) {
  element.style.display = 'none';
});
document.getElementById(id).style.display = 'block';
}