document.addEventListener('DOMContentLoaded', function() {
    let availabilityText = document.querySelector('.availability');

    // Example dynamic availability check
    let isAvailable = true; // This could be fetched from an API in real-world scenario
    availabilityText.textContent = isAvailable ? 'In Stock' : 'Out of Stock';
});
