
//cambio de color

//const keyOne = document.getElementById("key");
//const keyTwo = document.getElementById("two");


//document.getElementById("key").addEventListener('click',
////keyOne.style.color = "blue";
  
//})


//Comenzar hacer el bucle para que suenen las teclas para vaya cambiando el mp3////


//función para reproducir: objeto de audio como argumento y llama al método play() de ese objeto.

//va pirmero pausse y luego play para que se pueda reproducir varias veces el mismo sonido.

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();

}


///Declaramos una const común para llamar a todas las teclas, blancas y negras

const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");


///bucles

/*Para cada tecla negra en blackKeys, se agrega un evento de clic. 
Cuando se hace clic en una tecla negra, se crea un nuevo objeto de audio que apunta a un archivo mp3 específico en la carpeta /assets/audio/black-keys/. 
El archivo mp3 específico se determina por el índice de la tecla negra en el array blackKeys. 
Luego, este sonido se reproduce llamando a la función playSound().*/


  blackKeys.forEach((black, index) => {
    black.addEventListener("click", () => {
      let sound = new Audio(`/assets/audio/black-keys/sounds_black-keys_${index}.mp3`);
      playSound(sound);
    });
  });
    
  whiteKeys.forEach((white, index) => {
    white.addEventListener('click', () => {
      let sound = new Audio(`/assets/audio/white-keys/sounds_white-keys_${index}.mp3`);
      playSound(sound);
    });
  });


  //función para cambiar el color de las teclas



  function changeBackground(element, color) {
    element.style.backgroundColor = color;
}

let divs = document.getElementsByClassName('piano-container');  // Asegúrate de que 'black-key' es la clase correcta

for(let i = 0; i < divs.length; i++) {
    let div = divs[i];

    div.addEventListener('mousedown', function() {
        changeBackground(div, 'red'); // Cambia el color de fondo a rojo cuando se presiona el ratón
    });

    div.addEventListener('mouseup', function() {
        changeBackground(div, 'blue'); // Restaura el color de fondo original cuando se suelta el ratón
    });

    div.addEventListener('mouseleave', function() {
        changeBackground(div, 'yellow'); // Restaura el color de fondo original si el ratón sale del elemento
    });
}