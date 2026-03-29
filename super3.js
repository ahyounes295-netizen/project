document.addEventListener('DOMContentLoaded', function() {
    
    // Track the number of items in the grocery basket
    let basketTotal = 0;
    
    // Find all the "Add to Basket" buttons
    const addButtons = document.querySelectorAll('.add-btn');
    
    // Find the basket counter element in the navigation bar
    const cartCountDisplay = document.getElementById('cart-count');

    // Give instructions to every button on the page
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Add 1 to our total
            basketTotal++;
            
            // Update the little orange badge in the menu
            cartCountDisplay.textContent = basketTotal;
            
            // Change button appearance to show success
            const originalText = this.textContent;
            this.textContent = "Added!";
            this.style.backgroundColor = "#ff9f43"; // Turn orange
            this.style.borderColor = "#ff9f43";
            this.style.color = "white";
            
            // Reset the button back to normal after 1 second
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = "#fff";
                this.style.borderColor = "#2ecc71";
                this.style.color = "#2ecc71";
            }, 1000);
            
        });
    });

});