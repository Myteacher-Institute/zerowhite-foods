let totalPrice = 0;
const cartItems = []; // To track added items

// Function to add item to the cart
function addToCart(productElement) {
    const name = productElement.querySelector('h3').textContent.trim(); // Get product name
    const price = parseFloat(productElement.querySelector('p').textContent.replace(/[^0-9.]/g, '')); // Extract numeric price
    const imageUrl = productElement.querySelector('img').getAttribute('src'); // Get image URL
    const cartTableBody = document.querySelector('#cart-items tbody');

    // Check if the item already exists in the cart
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        // Update quantity and price
        existingItem.quantity += 1;
        existingItem.row.querySelector('.quantity').textContent = existingItem.quantity;
        existingItem.row.querySelector('.total-price').textContent = `₦${existingItem.quantity * price}`;

        // Update total price
        totalPrice += price;
        document.getElementById('total-price').textContent = totalPrice;
    } else {
        // Create a new row and add to the cart
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imageUrl}" alt="${name}" style="width: 50px; height: 50px; object-fit: cover;"> 
                ${name}
            </td>
            <td class="quantity">1</td>
            <td class="total-price">₦${price}</td>
            <td><button class="remove-from-cart">Remove</button></td>
        `;

        // Append the row to the cart
        cartTableBody.appendChild(row);

        // Add to cartItems array
        cartItems.push({ name, price, quantity: 1, row });

        // Update total price
        totalPrice += price;
        document.getElementById('total-price').textContent = totalPrice;

        // Notify user
        alert(`${name} was added to your cart.`);

        // Add event listener for the "Remove" button
        row.querySelector('.remove-from-cart').addEventListener('click', function () {
            removeFromCart(row, price, name);
        });
    }
}

// Function to remove item from the cart
function removeFromCart(row, price, name) {
    // Find the item in the cartItems array and remove it
    const index = cartItems.findIndex(item => item.name === name);
    if (index !== -1) {
        totalPrice -= cartItems[index].quantity * cartItems[index].price; // Deduct the correct total price
        cartItems.splice(index, 1);
    }

    // Remove the row from the table
    row.remove();

    // Update total price
    document.getElementById('total-price').textContent = totalPrice;
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        addToCart(product);
    });
});
