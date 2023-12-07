const tuneList = document.querySelectorAll(".drum");

for (let i = 0; i < tuneList.length; i++) {
  tuneList[i].addEventListener("click", function () {
    let buttonName = this.textContent;
    tune(buttonName)
  });
}


document.addEventListener("keydown",function(event){
  let keyCode = event.key
  tune(keyCode)
})


function tune(buttonContent){
  switch(buttonContent){
    case 'w':
      var mySound = new Audio('sounds/tom-1.mp3')
      mySound.play()
      break;
    case 'a':
      var mySound = new Audio('sounds/tom-2.mp3')
      mySound.play()
      break;
    case 's':
      var mySound = new Audio('sounds/tom-3.mp3')
      mySound.play()
      break;
    case 'd':
      var mySound = new Audio('sounds/tom-4.mp3')
      mySound.play()
      break;
    case 'j':
      var mySound = new Audio('sounds/snare.mp3')
      mySound.play()
      break;
    case 'k':
      var mySound = new Audio('sounds/crash.mp3')
      mySound.play()
      break;
    case 'l':
      var mySound = new Audio('sounds/kick-bass.mp3')
      mySound.play()
      break;
  }
}
