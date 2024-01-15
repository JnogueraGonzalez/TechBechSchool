
//cambio de color

//const keyOne = document.getElementById("key");
//const keyTwo = document.getElementById("two");


//document.getElementById("key").addEventListener('click',
////keyOne.style.color = "blue";
  
//})


//Comenzar hacer el bucle para que suenen las teclas para vaya cambiando el mp3////


//función para reproducir

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}


///Declaramos una const común para llamar a todas las teclas, blancas y negras

const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");


///bucles


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
  