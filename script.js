function selectPalets() {
  const paletsColor = document.querySelector('#color-palette');
  paletsColor.addEventListener('click', function(event) {
    const selectedPalet = document.querySelector('.selected');
    selectedPalet.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
selectPalets()

const pixelSelect = document.getElementsByClassName('pixel');
const classSelect = document.getElementsByClassName('selected');
function changePixelColor(){
  for (let i = 0; i < pixelSelect.length; i += 1){
    pixelSelect[i].addEventListener('click', function(event){
      const selectedBackgroundColor = window.getComputedStyle(classSelect[0]);
      if (!event.target.className.backgroundColor === 'white'){
        event.target.style.backgroundColor = 'white';
      } else {event.target.style.backgroundColor = selectedBackgroundColor.getPropertyValue('background-color');
      }
    })
  }
}
changePixelColor();

function limparPixels() {
  const listPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < listPixels.length; i += 1) {
    listPixels[i].style.backgroundColor = 'rgba(255, 255, 255)';
  }
}
document.querySelector('#clear-board').addEventListener('click', limparPixels);