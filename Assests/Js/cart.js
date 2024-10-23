const cartItems = [];
let totalPrice = 0;

// Function to add item to the cart
function addToCart(name, price) {
    // Create cart row
    const cartTableBody = document.querySelector('#cart-items tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>$${price}</td>
        <td><button class="remove-from-cart">Remove</button></td>
    `;

    // Append to cart
    cartTableBody.appendChild(row);

    // Update total price
    totalPrice += price;
    document.getElementById('total-price').textContent = totalPrice;

    // Add event listener to remove button
    row.querySelector('.remove-from-cart').addEventListener('click', function() {
        removeFromCart(row, price);
    });
}

// Function to remove item from the cart
function removeFromCart(row, price) {
    row.remove();
    totalPrice -= price;
    document.getElementById('total-price').textContent = totalPrice;
}

// Attach event listeners to all add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));
        addToCart(name, price);
    });
});
