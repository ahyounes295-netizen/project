document.addEventListener('DOMContentLoaded', function() {
    
    // Grab the ticket booking form
    const ticketForm = document.getElementById('ticket-form');
    
    // The price for one ticket
    const ticketPrice = 12;

    // Listen for the form submission
    ticketForm.addEventListener('submit', function(event) {
        
        // Prevent the page from refreshing
        event.preventDefault();
        
        // Get the values the user selected
        const movie = document.getElementById('movie-select').value;
        const date = document.getElementById('date').value;
        const ticketCount = document.getElementById('tickets').value;
        
        // Calculate the total cost
        const totalCost = ticketCount * ticketPrice;
        
        // Create a nice booking summary message
        const message = `🍿 BOOKING CONFIRMED 🍿\n\nMovie: ${movie}\nDate: ${date}\nTickets: ${ticketCount}\nTotal Price: $${totalCost}.00\n\nPlease pay at the box office. Enjoy the show!`;
        
        // Show the message to the user
        alert(message);
        
        // Clear the form for the next customer
        ticketForm.reset();
    });

});