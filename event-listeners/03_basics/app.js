let p = document.querySelector("p");
let div = document.querySelector(".box");
let btn = document.querySelector("button");

function addBackgroundColor(){
    this.style.backgroundColor = "purple"
}
p.addEventListener("click", addBackgroundColor)

div.addEventListener("click", function(){
    console.log(this);
    addBackgroundColor.call(this);
})

btn.addEventListener("click", function(){
    console.log(this);
    addBackgroundColor.call(this);
})