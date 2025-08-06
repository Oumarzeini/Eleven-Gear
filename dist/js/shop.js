import { allProducts } from "./all_products.js";

const products = {
    tShirts: [
        {img: "/images/real kit.webp", name: "Real Madrid Away kit", price: 19.99},
        {img: "/images/barca kit.webp", name: "Barcelona Home kit", price: 19.99},
        {img: "/images/newcastle kit.webp", name: "Newcastle United Home kit", price: 19.99},
        {img: "/images/real kit.webp", name: "Real Madrid Away kit", price: 19.99}
    ],
    
    socks: [
    {img: "/images/black socks.avif", name: "Black Socks", price: 5.5},
    {img: "/images/white socks.\webp", name: "White Socks", price: 5.5},
    {img: "/images/black socks.avif", name: "Black Socks", price: 5.5},
    {img: "/images/white socks.\webp", name: "White Socks", price: 5.5}
    ],

    boots: [
    {img: "/images/red boots.png", name: "Red Boots", price: 10},
    {img: "/images/gray boots.jpg", name: "Gray Boots", price: 10},
    {img: "/images/black boots.jpg", name: "Black Boots", price: 10},
    {img: "/images/red boots.png", name: "Red Boots", price: 10}
    ]
}

let selectedItem = null;

const appendFindMoreBtn = (category, link) => {
    const btn = document.createElement("button");
    btn.classList.add("find_more");
    btn.innerHTML = ` Find more &RightAngleBracket; `;
    btn.onclick = () => {window.location.href = link;};
    category.append(btn);
}

const displayItems = () => {
    const tShirtsCardContainer = document.getElementById("t-shirts_card_container");
    const socksCardContainer = document.getElementById("socks_card_container");
    const bootsCardContainer = document.getElementById("boots_card_container");

    tShirtsCardContainer.innerHTML = '';
    socksCardContainer.innerHTML = '';
    bootsCardContainer.innerHTML = '';

    products.tShirts.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = `
        <img class="product_image" src="${item.img}" alt="${item.name}"> <p class="caption">${item.name}</p> <div class="price_and_icon_container"><p class="price">$${item.price}</p>
        <i class="fa-solid fa-cart-shopping add_to_cart"></i> </div>`;
        cardDiv.onclick = () => {
            showPopup(item);
        }
        tShirtsCardContainer.append(cardDiv);
    });

    products.socks.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = `
        <img class="product_image" src="${item.img}" alt="${item.name}"> <p class="caption">${item.name}</p> <div class="price_and_icon_container"><p class="price">$${item.price}</p>
        <i class="fa-solid fa-cart-shopping add_to_cart"></i> </div>`;
        cardDiv.onclick = () => {
            showPopup(item);
        }
        socksCardContainer.append(cardDiv);
    });

    products.boots.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = `
        <img class="product_image" src="${item.img}" alt="${item.name}"> <p class="caption">${item.name}</p> <div class="price_and_icon_container"><p class="price">$${item.price}</p>
        <i class="fa-solid fa-cart-shopping add_to_cart"></i> </div>`;
        cardDiv.onclick = () => {
            showPopup(item);
        }
        bootsCardContainer.append(cardDiv);
    });

    const tShirtsCategory = document.getElementById("T-shirts_category");
    appendFindMoreBtn(tShirtsCategory, "t-shirts.html");

    const socksCategory = document.getElementById("socks_category");
    appendFindMoreBtn(socksCategory, "socks.html");

    const bootsCategory = document.getElementById("boots_category");
    appendFindMoreBtn(bootsCategory, "boots.html");
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

const openSearch = () => {
    const searchBarContainer = document.getElementById("search_bar_container");
    searchBarContainer.style.display = "inline-flex"

}

 const openBtn = document.getElementById("open_s_btn");
    openBtn.onclick = ()=> {
        openSearch();
    }

const closeSearch = () => {
    const searchBarContainer = document.getElementById("search_bar_container");
    searchBarContainer.style.display = "none";
    window.location.reload();
}

const closeBtn = document.getElementById("close_s_btn");
closeBtn.onclick = () => {
    closeSearch();
}

const search = () => {
    const searchBody = document.getElementById("T-shirts_category");
    const form = document.getElementById("search_form");
    const inputField = document.getElementById("search_input");

    form.addEventListener("submit" , (e) => {
        e.preventDefault();


        const input = inputField.value.trim().toLowerCase();

        const filteredItems = allProducts.filter(item => item.name.toLowerCase().includes(input));

        searchBody.innerHTML = '';

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("cards_container");

        filteredItems.forEach(item => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.innerHTML = `
            <img class="product_image" src="${item.img}" alt="${item.name}"> <p class="caption">${item.name}</p> <div class="price_and_icon_container"><p class="price">$${item.price}</p>
            <i class="fa-solid fa-cart-shopping add_to_cart"></i> </div>`;
            cardDiv.onclick = () => {
                showPopup(item);
            };
            cardContainer.append(cardDiv)
            searchBody.append(cardContainer);
        })

        if(filteredItems.length === 0) {
            searchBody.innerHTML = `<h1> No Products Found </h1>`;
        }

    })

}

const searchBtn = document.getElementById("search_btn");
searchBtn.onclick = () => {
    search();
}


document.addEventListener("DOMContentLoaded", () => {
    displayItems();
    updateCounter();
})