// Cambio de color Andrea

document.addEventListener('DOMContentLoaded', function() {
  // Para obtener todas las teclas blancas y negras
  var keys = document.querySelectorAll('.key');

  // Asigna un evento de clic a cada tecla
  keys.forEach(function(key) {
      key.addEventListener('click', function() {
          // Resetea el color de fondo de todas las teclas
          keys.forEach(function(k) {
              k.style.backgroundColor = '';
          });

          // Cambia el color de fondo de la tecla clicada
          key.style.backgroundColor = '#CEA8FF';
      });
  });
});


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
  