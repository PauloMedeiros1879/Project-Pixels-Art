// cria função para selecionar as cores nos paletes.
function selectPalets() {
  const paletsColor = document.querySelector('#color-palette');
  paletsColor.addEventListener('click', function(event) {
    const selectedPalet = document.querySelector('.selected');
    selectedPalet.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
selectPalets()

// cria 25 pixels
function creatPixels(){
  const pixelsBoard = document.getElementById('pixel-board');
for(let count = 0; count < 25; count += 1){
  const pixel = document.createElement('div');
  pixel.className = "pixel";
  pixelsBoard.appendChild(pixel);
  }
}
creatPixels()

// cria uma função para mudar a cor
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

// cria um botão de limpeza
function cleanPixels() {
  const listPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < listPixels.length; i += 1) {
    listPixels[i].style.backgroundColor = 'rgba(255, 255, 255)';
  }
}
document.querySelector('#clear-board').addEventListener('click', cleanPixels);

// botao para gerar pixels com a quantidade indicada
// function buttonGeneretor(){
//   const inputElement = getElementById('board-size');
//   const buttonVQV = getElementById('generate-board');
//   const pixel = document.querySelectorAll('.pixel');
//   const pixelsBoard = document.getElementById('pixel-board');
//   pixel.forEach(function (pixel) {
//     pixel.addEventListener('click', pixel.remove)
//   });
//   buttonVQV.addEventListener('click', function(){
//     for (let count = 0; count < 25; count += 1){
//       const pixels = document.createElement('div');
//       pixels.className = "pixel";
//       pixelsBoard.appendChild(pixel);
//     }
//     inputElement.value = '';
//   })
// }
// buttonGeneretor();
