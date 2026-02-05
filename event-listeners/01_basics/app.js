let sayName = () => console.log("shubham");
let greet = () => console.log("welcome");

let btns = document.querySelectorAll(".my-btn"); 
for(btn of btns){
    // btn.onclick = function() {
    //     console.log("hii");
    // }
    // btn.onclick = sayName;
    // btn.onclick = greet;
    btn.addEventListener("click", (event)=> {
         sayName();
         greet();
    })
}

