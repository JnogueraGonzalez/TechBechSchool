
//seleccionamos un atributo
const audioEtiqueta = document.querySelector("audio");

///elemento.addEventListener("tipo-de-evento" , funcion-a-ejecutar)

document.addEventListener("mouseover", () => {
  audioEtiqueta.setAttribute("src", '/assets/audio/white-keys/sounds_white-keys_1.mp3');
  audioEtiqueta.play();
  console.log(`Reproduciendo: ${audioEtiqueta.src}`)

})
  
const keyOne = document.getElementById("one");

//cambio de color


document.getElementById("one").addEventListener('mouseover', 
function (){
  keyOne.style.color = "blue";
  keyOne.setAttribute("src",audio);
  keyOne.play("src", "assets/audio/white-keys/sounds_white-keys_1.mp3");

})


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
    white.addEventListener('mouseover', () => {
      let sound = new Audio(`/assets/audio/white-keys/sounds_white-keys_${index}.mp3`);
      playSound(sound);
    });
  });
  