document.addEventListener('DOMContentLoaded', function() {
    
    const reservationForm = document.getElementById('reservation-form');

    reservationForm.addEventListener('submit', function(event) {
        // Prevent the page from automatically reloading
        event.preventDefault();
        
        // Grab the values the user selected
        const checkIn = document.getElementById('check-in').value;
        const roomType = document.getElementById('room-type').value;
        
        // Ensure the check-in date is valid
        if (checkIn) {
            alert(`Success! We have received your availability request for a ${roomType} starting on ${checkIn}. Our concierge will email you shortly.`);
            
            // Clear the form after submission
            reservationForm.reset();
        } else {
            alert("Please select a valid check-in date.");
        }
    });
});