let cart1=document.getElementsByClassName("cart-btn")
count=0;
let empty=document.getElementById("empty");
console.log(cart1);
function add1(){
Array.from(cart1).forEach((i)=>{
    
    i.addEventListener("click",(()=>{
        count++;
        empty.innerText=count+" "+"Item Added to Bag";
    }))

})}
add1();