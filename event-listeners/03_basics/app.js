// let p = document.querySelector("p");
// let div = document.querySelector(".box");
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", (event) => {
//     console.log(event.code);
//     if(event.code == 'ArrowUp'){
//         console.log("move upward");
//     }
//     if(event.code == 'ArrowDown'){
//         console.log("move downward");
//     }
//     if(event.code == 'ArrowLeft'){
//         console.log("move left");
//     }
//     if(event.code == 'ArrowRight'){
//         console.log("move right");
//     }
// })

// function addBackgroundColor(){
//     this.style.backgroundColor = "purple"
// }
// p.addEventListener("click", addBackgroundColor)

// div.addEventListener("click", function(){
//     console.log(this);
//     addBackgroundColor.call(this);
// })

// btn.addEventListener("click", function(){
//     console.log(this);
//     addBackgroundColor.call(this);
// })

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("div is clicked");
});
ul.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("ul is clicked");
}) ;  
for (li of lis){
    li.addEventListener("click", (event)=>{
        event.stopPropagation();
        console.log("li is clicked");
    })
} 
