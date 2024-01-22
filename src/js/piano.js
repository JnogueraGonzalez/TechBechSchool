
//Comenzar hacer el bucle para que suenen las teclas para vaya cambiando el mp3////


//función para reproducir: objeto de audio como argumento y llama al método play() de ese objeto.

//va pirmero pause y luego play para que se pueda reproducir varias veces el mismo sonido.

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();   

}


///Declaramos una const común para llamar a todas las teclas, blancas y negras,son como dos arrays separados.

const whiteKeys = document.querySelectorAll(".white-key");   
const blackKeys = document.querySelectorAll(".black-key");


///bucles

/*Para cada tecla negra en blackKeys, se agrega un evento de clic. 
Cuando se hace clic en una tecla negra, se crea un nuevo objeto de audio que apunta a un archivo mp3 específico en 
la carpeta /assets/audio/black-keys/. 
El archivo mp3 específico se determina por el índice de la tecla negra en el array blackKeys. 
Luego, este sonido se reproduce llamando a la función playSound().*/


  blackKeys.forEach((black, index) => {
    black.addEventListener("click", () => {
      let sound = new Audio(`../assets/audio/black-keys/sounds_black-keys_${index}.mp3`);  
      playSound(sound);
    });
  });
    
  whiteKeys.forEach((white, index) => {
    white.addEventListener('click', () => {
      let sound = new Audio(`../assets/audio/white-keys/sounds_white-keys_${index}.mp3`);
      playSound(sound);
    });
  });


//función para cambiar el color de las teclas


function changeBackground(element, color) {    // Cambia el color de fondo del elemento
  element.style.backgroundColor = color; 
}

let divs = document.getElementsByClassName('piano-container');  // Obtiene todos los elementos con la clase 'piano-container' y los almacena en un array

for(let i = 0; i < divs.length; i++) {       // Recorre el array de elementos
    let div = divs[i];

    div.addEventListener('mousedown', function() {  // Añade un evento de ratón a cada elemento 
        changeBackground(div, 'white'); // Cambia el color de fondo a rojo cuando se presiona el ratón
    });

    div.addEventListener('mouseup', function() {
        changeBackground(div, 'black'); // Restaura el color de fondo original cuando se suelta el ratón
    });

    div.addEventListener('mouseleave', function() {
        changeBackground(div, 'orange'); // Restaura el color de fondo original si el ratón sale del elemento
    });
}


/*que cada tecla suene con una letra del teclado*/



/*bucle para las teclas blancas*/

/*cuando se suelta la tecla, se remueve la clase white-active de la tecla correspondiente y se deja de reproducir el sonido.
si la tecla presionada es "a", se remueve la clase white-active de la tecla one*/

/*addEventListener("keyup", (e) => {   
  if (e.key === "a") {               
    one.classList.remove("white-active");   
  }
  if (e.key === "s") {
    two.classList.remove("white-active");
  }
  if (e.key === "d") {
    three.classList.remove("white-active");
  }
  if (e.key === "f") {
    four.classList.remove("white-active");
  }
  if (e.key === "g") {
    five.classList.remove("white-active");
  }
  if (e.key === "h") {
    six.classList.remove("white-active");
  }
  if (e.key === "j") {
    seven.classList.remove("white-active");
  }
  if (e.key === "k") {
    eight.classList.remove("white-active");
  }
  if (e.key === "l") {
    nine.classList.remove("white-active");
  }
  if (e.key === ";") {
    ten.classList.remove("white-active");
  }
  if (e.key === "'") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }
});*/

//cuando se presiona una tecla, se agrega la clase white-active a la tecla correspondiente

/*La función recibe un objeto de evento e como argumento.
Este objeto contiene información sobre el evento, incluyendo qué tecla se presionó o se soltó, 
que es lo que se está comprobando aquí con e.key.
e.key === "a" es una condición que verifica si la tecla que se presionó o se soltó es la tecla "a". 
Si es así, entonces se ejecutará el código dentro del bloque if. En el código completo que proporcionaste anteriormente, 
si esta condición es verdadera, se agregaría o eliminaría una clase CSS a un elemento, y posiblemente se reproduciría un sonido.*/

/*

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    one.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_0.mp3"));
  }   
  if (e.key === "s") {
    two.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_1.mp3"));
  }
  if (e.key === "d") {
    three.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_2.mp3"));
  }
  if (e.key === "f") {
    four.classList.add("white-active");
    playSound(new Audio("../assets/audio//white-keys/sounds_white-keys_3.mp3"));
  }
  if (e.key === "g") {
    five.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_4.mp3"));
  }
  if (e.key === "h") {
    six.classList.add("white-active");
    playSound(new Audio("../assets/audio//white-keys/sounds_white-keys_5.mp3"));
  }
  if (e.key === "j") {
    seven.classList.add("white-active");
    playSound(new Audio("../assets/audio//white-keys/sounds_white-keys_6.mp3"));
  }
  if (e.key === "k") {
    eight.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_7.mp3"));
  }
  if (e.key === "l") {
    nine.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_8.mp3"));
  }

  if (e.key === ";") {
    ten.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_9.mp3"));
  }
  if (e.key === "'") {
    eleven.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_10.mp3"));
  }
  if (e.key === "z") {
    twelve.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_11.mp3"));
  }
  if (e.key === "x") {
    thirteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_12.mp3"));
  }
  if (e.key === "c") {
    fourteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_13.mp3"));
  }
  if (e.key === "v") {
    fifteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_14.mp3"));
  }
  if (e.key === "b") {
    sixteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_15.mp3"));
  }
  if (e.key === "n") {
    seventeen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_16.mp3"));
  }
  if (e.key === "m") {
    eighteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_17.mp3"));
  }
  if (e.key === ",") {
    nineteen.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_18.mp3"));
  }
  if (e.key === ".") {
    twenty.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_19.mp3"));
  }
  if (e.key === "/") {
    twentyone.classList.add("white-active");
    playSound(new Audio("../assets/audio/white-keys/sounds_white-keys_20.mp3"));
  }
});*/



const keyMap = {
  "a": {element: one, sound: "../assets/audio/white-keys/sounds_white-keys_0.mp3"},
  "s": {element: two, sound: "../assets/audio/white-keys/sounds_white-keys_1.mp3"},
  "d": {element: three, sound: "../assets/audio/white-keys/sounds_white-keys_2.mp3"},
  "f": {element: four, sound: "../assets/audio/white-keys/sounds_white-keys_3.mp3"},
  "g": {element: five, sound: "../assets/audio/white-keys/sounds_white-keys_4.mp3"},
  "h": {element: six, sound: "../assets/audio/white-keys/sounds_white-keys_5.mp3"},
  "j": {element: seven, sound: "../assets/audio/white-keys/sounds_white-keys_6.mp3"},
  "k": {element: eight, sound: "../assets/audio/white-keys/sounds_white-keys_7.mp3"},
  "l": {element: nine, sound: "../assets/audio/white-keys/sounds_white-keys_8.mp3"},
  "ñ": {element: ten, sound: "../assets/audio/white-keys/sounds_white-keys_9.mp3"},
  "z": {element: eleven, sound: "../assets/audio/white-keys/sounds_white-keys_10.mp3"},
  "x": {element: twelve, sound: "../assets/audio/white-keys/sounds_white-keys_11.mp3"},
  "c": {element: thirteen, sound: "../assets/audio/white-keys/sounds_white-keys_12.mp3"},
  "v": {element: fourteen, sound: "../assets/audio/white-keys/sounds_white-keys_13.mp3"},
  "b": {element: fifteen, sound: "../assets/audio/white-keys/sounds_white-keys_14.mp3"},
  "n": {element: sixteen, sound: "../assets/audio/white-keys/sounds_white-keys_15.mp3"},
  "m": {element: seventeen, sound: "../assets/audio/white-keys/sounds_white-keys_16.mp3"},
  ",": {element: eighteen, sound: "../assets/audio/white-keys/sounds_white-keys_17.mp3"},
  ".": {element: nineteen, sound: "../assets/audio/white-keys/sounds_white-keys_18.mp3"},
  "/": {element: twenty, sound: "../assets/audio/white-keys/sounds_white-keys_19.mp3"},
  
  "q": {element: b1, sound: "../assets/audio/black-keys/sounds_black-keys_0.mp3"},
  "w": {element: b2, sound: "../assets/audio/black-keys/sounds_black-keys_1.mp3"},
  "e": {element: b3, sound: "../assets/audio/black-keys/sounds_black-keys_2.mp3"},
  "r": {element: b4, sound: "../assets/audio/black-keys/sounds_black-keys_3.mp3"},
  "t": {element: b5, sound: "../assets/audio/black-keys/sounds_black-keys_4.mp3"},
  "y": {element: b6, sound: "../assets/audio/black-keys/sounds_black-keys_5.mp3"},
  "u": {element: b7, sound: "../assets/audio/black-keys/sounds_black-keys_6.mp3"},
  "i": {element: b8, sound: "../assets/audio/black-keys/sounds_black-keys_7.mp3"},
  "o": {element: b9, sound: "../assets/audio/black-keys/sounds_black-keys_8.mp3"},
  "p": {element: b10, sound: "../assets/audio/black-keys/sounds_black-keys_9.mp3"},
  "`": {element: b11, sound: "../assets/audio/black-keys/sounds_black-keys_10.mp3"},
  "+": {element: b12, sound: "../assets/audio/black-keys/sounds_black-keys_11.mp3"},
  "1": {element: b13, sound: "../assets/audio/black-keys/sounds_black-keys_12.mp3"},
  "2": {element: b14, sound: "../assets/audio/black-keys/sounds_black-keys_13.mp3"},
  "3": {element: b15, sound: "../assets/audio/black-keys/sounds_black-keys_14.mp3"},
 
}; //objeto con las teclas y el sonido que tienen que reproducir


addEventListener("keydown", (e) => {
  const keyInfo = keyMap[e.key];
  if (keyInfo) {
    keyInfo.element.classList.add("white-active");
    playSound(new Audio(keyInfo.sound));
  }
});  /*cuando se presiona una tecla, se agrega la clase white-active a la tecla correspondiente
 y se reproduce el sonido correspondiente.*/

addEventListener("keyup", (e) => {
  const keyInfo = keyMap[e.key];
  if (keyInfo) {
    keyInfo.element.classList.remove("white-active");
  }
});