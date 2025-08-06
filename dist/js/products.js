const products = [
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    },
    {
        img: '/images/newcastle kit.webp',
        name: "Newcaslte Home kit",
        price: 19.99,
    },
    {
        img: "/images/barca kit.webp",
        name: "Barca Home kit",
        price: 19.99
    },
    {
        img: "/images/real kit.webp",
        name: "Real Madrid Away kit",
        price: 19.99
    }
];

let selectedItem = null;

const cardsContainer = document.getElementById("cards_container");

const renderCards = () => {
    cardsContainer.innerHTML = '';
    products.forEach(product => {
        const cardItemDiv = document.createElement("div");
        cardItemDiv.classList.add("card");
   
        cardItemDiv.innerHTML = `
        <img class="product_image" src="${product.img}" alt="${product.name}"> <p class="caption">$${product.name}</p>
         <div class="price_and_icon_container"><p class="price">$${product.price}</p>
         <i class="fa-solid fa-cart-shopping add_to_cart"></i> </div> `
        cardsContainer.appendChild(cardItemDiv);
    });

    const cards = document.querySelectorAll(".card");
    if (cards) {
    cards.forEach( (card, index) => {
        card.onclick = () =>  showPopup(products[index]);
        
    });
}
}



const showPopup = (product) => {
    selectedItem = product;
    const popupContainer = document.querySelector(".popup");
    const popupCard = document.getElementById("popup_card");
    

    popupCard.innerHTML = '';

    const popupPAndIContainer = document.createElement("div");
    popupPAndIContainer.classList.add('price_and_icon_container');

    let img = document.createElement("img");
    img.src = product.img ;
    img.className = 'product_image';

    let caption = document.createElement("p");
    caption.textContent = product.name;
    caption.className= 'caption';

    let price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.className = 'price';

    popupPAndIContainer.append(price);
    popupCard.append(img, caption, popupPAndIContainer);

    
    document.querySelector(".overlay").style.display = 'block';
    popupContainer.style.display = 'block';
}


const closePopup = document.querySelector(".close_popup");
closePopup.addEventListener('click', () => {
    document.querySelector(".overlay").style.display = 'none';
    document.querySelector(".popup").style.display = 'none';
});

document.querySelector(".overlay").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = 'none';
    document.querySelector(".popup").style.display = 'none';
});



const toggleFeedback = () => {
    const feedback = document.querySelector(".feedback");
    const add = document.getElementById("add");

    feedback.classList.add("show_feedback");
    add.style.display = "none";
    setTimeout(() => {
        feedback.classList.remove("show_feedback");
        add.style.display = "inline-flex";
    },2000);
}

const updateCounter = () => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart") || '[]') ;
    document.querySelector(".items_counter").textContent = cart.length;
}

document.getElementById("add_to_cart_btn").addEventListener("click", () => {
            if (selectedItem) {
                toggleFeedback();
                const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
                cart.push(selectedItem);
                localStorage.setItem("shoppingCart", JSON.stringify(cart));
                updateCounter();
            } else {
                console.info("the selected Item isn't set properly !");
            }
           
        });


document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    updateCounter();
});
