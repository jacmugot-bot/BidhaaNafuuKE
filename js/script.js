const cart = [];
let total = 0;

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        addToCart(name, price);
    });
});

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    cartCount.textContent = cart.length;
    totalDisplay.textContent = total;

    renderCart();
}

function renderCart() {
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });
}
