const clearBtn = document.getElementById("clear_cart");
const cartsContainer = document.getElementById("carts_container");

const triggerCarts = () => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    const header = document.createElement("h1");
    header.classList.add("header_text");
    header.textContent = "Your cart items"


    cartsContainer.innerHTML = '';
    
    let total = 0;

    if (cart.length === 0) {
        cartsContainer.innerHTML = `<p class="no_items"> No items , Go shop Now </p>`;
    } else {
        cart.forEach((item, index) => {
        const cartWraper = document.createElement('div');
        cartWraper.classList.add("cart_wraper");

        cartWraper.innerHTML =  
        ` <img class="cart_wraper_img " src="${item.img}" alt="${item.name}" >     
           <div class="details_container">
           <p> ${item.name}</p>
           <p> ${item.price}$</p>
           </div> 
           <i onclick="deleteItem(${index})" class="fa-solid fa-trash delete_item" > </i>
             `;
             
             cartsContainer.prepend(cartWraper);
             total += item.price;
    })
    };
    const orderContainer = document.createElement("div");
    orderContainer.id = "order";
    orderContainer.classList.add("order");
    if(cart.length === 0){
        orderContainer.innerHTML = 
             `<div class='total_and_order_div'> <p>Total : <strong ">$${total.toFixed(2)}</strong></p>
               `;
    }else {
        orderContainer.innerHTML = 
             `<div class='total_and_order_div'> <p>Total : <strong ">$${total.toFixed(2)}</strong></p>
                <button class='oreder_btn'>ORDER</button> </div>
                <button id="clear_cart" class="clear_cart" onclick="clearCart()">Clear Cart</button>`;
    }
            
    cartsContainer.append(orderContainer);
    cartsContainer.prepend(header);
    

};

document.addEventListener("DOMContentLoaded", triggerCarts);


const clearCart = () => {
    if(confirm("Sure you wanna delete all you cart items?")) {
        localStorage.removeItem("shoppingCart");
        triggerCarts();
    }
}

const deleteItem = (index) => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    if(confirm("Are you sure you wanna delete this item from your cart ?")) {
        cart.splice(index, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        triggerCarts();
    }
    
}