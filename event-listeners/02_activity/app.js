let btn = document.querySelector(".my-btn");
let heading = document.querySelector("h1");
let div = document.querySelector(".my-div");


function generateColor(){
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
 let rgbColor = `rgb(${r},${g},${b})`;
 return rgbColor;
}
function setDivBackground(){
    let color = generateColor();
    div.style.backgroundColor = color;
    heading.textContent = color;
}
btn.addEventListener("click", ()=>{
    setDivBackground();
})