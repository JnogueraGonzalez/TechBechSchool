
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



//que cada tecla suene con una letra del teclado

addEventListener("keyup", (e) => {
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
});

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
});