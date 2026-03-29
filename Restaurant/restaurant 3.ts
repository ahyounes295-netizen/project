// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Grab the booking form
    const bookingForm = document.getElementById('booking-form');

    // Add an event listener for when the form is submitted
    bookingForm.addEventListener('submit', function(event) {
        
        // Prevent the page from refreshing (the default form behavior)
        event.preventDefault();
        
        // Grab the name the user typed in
        const name = document.getElementById('name') !. value ;
        
        // Show a simple success pop-up
        alert(`Thank you, ${name}! Your table request has been received. We will call you shortly to confirm.`);
        
        // Clear the form fields
        bookingForm.reset();
    });
});
