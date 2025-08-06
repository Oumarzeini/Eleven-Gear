const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
});

let cartElements = document.querySelectorAll(".fade");
cartElements.forEach((el) => observer.observe(el));

const updateCounter = () => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart") || '[]') ;
    document.querySelector(".items_counter").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
})