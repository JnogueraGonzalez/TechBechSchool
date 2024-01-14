const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");


function playSound(audio) {

}

  
const keyOne = document.getElementById("one");

///elemento.addEventListener("tipo-de-evento" , funcion-a-ejecutar)



document.getElementById("one").addEventListener('mouseover', 
function (){
  keyOne.style.color = "blue";
  keyOne.setAttribute("src", "assets/audio/white-keys/sounds_white-keys_1.mp3");
  //keyOne.play("src", "assets/audio/white-keys/sounds_white-keys_1.mp3");
  console.log(`Reproduciendo: ${audioEtiqueta.src}`)
})


///keyOne.addEventListener(mouseover, () =>{
  //const keySound = document.getElementById("/assets/audio/white-keys/sounds_white-keys_1.mp3");
  //keySound.play();
//})



    blackKeys.forEach((black, index) => {
      black.addEventListener("mouseenter", () => {
        let sound = new Audio(`./assets/audio/black-keys/sounds_black-keys_${index}.mp3`);
        playSound(sound);
      });
    });
    
    whiteKeys.forEach((white, index) => {
      white.addEventListener('mouseover', () => {
        let sound = new Audio(`./assets/audio/white-keys/sounds_white-keys_${index}.mp3`);
        playSound(sound);
      });
    });
    
    function playSound(sound) {
      sound.pause();
      sound.currentTime = 0;
      //sound.play();
    }


