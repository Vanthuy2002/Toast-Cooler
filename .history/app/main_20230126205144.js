let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let createToast = function(id){
    let toast = document.createElement("li");
    
}

btns.forEach((value)=>{
    value.addEventListener("click", ()=> {
        createToast(value.id)
    });
})