function selectPalets() {
  const paletsColor = document.querySelector('#color-palette');
  paletsColor.addEventListener('click', function(event) {
    let selectedPalet = document.querySelector('.selected');
    selectedPalet.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
selectPalets()

let pixelSelect = document.getElementsByClassName('pixel');
let classSelect = document.getElementsByClassName('selected');
function changePixelColor(){
  for (let i = 0; i < pixelSelect.length; i += 1){
    pixelSelect[i].addEventListener('click', function(event){
      let selectedBackgroundColor = window.getComputedStyle(classSelect[0]);
      if (!event.target.className.backgroundColor === 'white'){
        event.target.style.backgroundColor = 'white';
      } else {event.target.style.backgroundColor = selectedBackgroundColor.getPropertyValue('background-color');
      }
    })
  }
}
changePixelColor();