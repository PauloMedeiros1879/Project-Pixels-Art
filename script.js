let pixelBoard = document.querySelector("#pixel-board");
function pixels(){
    for (let i = 0; i < 5; i += 1){
        let line = document.createElement("div");
        pixelBoard.appendChild(line);
        for (let l = 0; l < 5; l +=1) {
            let pixels = document.createElement("div");
            pixels.className = "pixel";
            linha.appendChild(pixel);
        }
    }
}
pixels()

// function selectColor() {
//     let select = document.querySelector(".selected");
//     let pixelsColor = document.getElementsByClassName("color");
//     pixelsColor.addEventListener("click", function(event)){
//     pixelsColor.className = event.target.className;
//     let rmSelect = select.remove.className;
//     }
// }
