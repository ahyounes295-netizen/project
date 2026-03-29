document.addEventListener('DOMContentLoaded', function() {
    
    // This variable keeps track of how many items are in the cart
    let cartTotalItems = 0;
    
    // Find all the "Add to Cart" buttons on the page
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Find the little number next to "Cart" in the top menu
    const cartCountDisplay = document.getElementById('cart-count');

    // Tell every button what to do when clicked
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Increase the cart number by 1
            cartTotalItems++;
            
            // Update the number on the screen
            cartCountDisplay.textContent = cartTotalItems;
            
            // Give a little visual feedback (change button text temporarily)
            const originalText = this.textContent;
            this.textContent = "Added!";
            this.style.backgroundColor = "#4CAF50"; // Turn green
            
            // Change it back after 1.5 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = "#000"; // Back to black
            }, 1500);
        });
    });
    
});
