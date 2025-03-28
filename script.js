let material=document.querySelectorAll(".material-icons")
let first=material[0];
first.addEventListener("click",()=>{
    popup=document.querySelector("#popup")
    popup.style.display=popup.style.display==='block' ? 'none' : 'block';
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
let j=document.getElementById("pop");

setTimeout(() => {
    j.style.display="flex";
}, 4000);

document.getElementById("btn-back").addEventListener("click",function(){
   document.getElementById("pop").style.display="none";
})