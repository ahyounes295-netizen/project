document.addEventListener('DOMContentLoaded', function() {
    
    // Keep track of how many items are in the tote bag
    let toteTotal = 0;
    
    // Find all the "Add to Tote" buttons on the page
    const addButtons = document.querySelectorAll('.add-btn');
    
    // Find the tote bag counter element in the navigation bar
    const cartCountDisplay = document.getElementById('cart-count');

    // Attach click rules to every single button
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Increase the tote count by 1
            toteTotal++;
            
            // Update the badge in the menu to show the new number
            cartCountDisplay.textContent = toteTotal;
            
            // Visually change the button so the user knows it worked
            const originalText = this.textContent;
            this.textContent = "Added to Tote!";
            this.style.backgroundColor = "#e8a87c"; // Change to warm terracotta
            this.style.color = "#2c3e2e";
            
            // Change the button back to normal after 1.5 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = "#2c3e2e"; // Back to dark green
                this.style.color = "#f0e9df";
            }, 1500);
            
        });
    });

});
