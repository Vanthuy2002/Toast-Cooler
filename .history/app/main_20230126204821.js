let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let createToast = function(id){
    console.log()
}

btns.forEach((value)=>{
    value.addEventListener("click", createToast());
})