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

    let header = document.querySelector(".header");
    let input = document.querySelector(".inputName");
    input.addEventListener("input", ()=>{
        let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
        input.value = filteredValue;
        header.textContent = filteredValue;
    })