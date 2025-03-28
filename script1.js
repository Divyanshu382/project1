n=Array.from(document.getElementsByClassName("cart-btn"));

n.forEach(i => {
    i.addEventListener("click",function(){
    k=Array.from(document.getElementsByClassName("container"));
    k.forEach((j)=>{
        j.style.display="flex";
    });
})});
document.getElementById("btn-back").addEventListener("click",function(){
    k=Array.from(document.getElementsByClassName("container"));
    k.forEach((j)=>{
        j.style.display="none";
    });
});
j=document.getElementById("pop");
setTimeout(() => {
    j.style.display="flex";
}, 5000);

document.getElementById("btn1-back").addEventListener("click",function(){
   document.getElementById("pop").style.display="none";
})
document.getElementById("signup-btn").addEventListener("click",function(){
    s=Array.from(document.getElementsByClassName("signup-container"));
    s.forEach((u)=>{
        u.style.display="block";

});
})

cart=document.getElementById("signup1").addEventListener("click",function(){
    document.getElementById("cart-main").style.display="block";
})
cross=document.getElementById("cross").addEventListener("click",function(){
    document.getElementById("cart-main").style.display="none";
})
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    var addToCartButtons = document.getElementsByClassName('cart-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}
cartcount=0;
function addToCartClicked(event) {
    cartcount++
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('info')[0].innerText
    console.log(title)
    var price = shopItem.getElementsByClassName('price')[0]
    var price1=price.querySelector('span').innerText
    console.log(price1)
    var imageSrc = shopItem.getElementsByClassName('avatar')[0].src
    console.log(imageSrc)
    addItemToCart(title, price1, imageSrc)
    document.getElementById("cart-body-head").innerText=cartcount+" "+"Item Added to the cart";
    
}

function addItemToCart(title, price1, imageSrc) {
    var cartRow = document.createElement('div')
    
    
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementById("cart-body-main")
    var cartRowContents = `
        <div class="cart-item cart-column"><div>
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100"></div>
            <div class="cart-item-title">${title}</div>
        <div class="cart-price cart-column">${price1}
        
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    cartItems.append(cartRow)
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}





