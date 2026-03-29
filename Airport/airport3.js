document.addEventListener('DOMContentLoaded', function() {
    
    // Grab the flight search form
    const searchForm = document.getElementById('flight-search-form');

    // Listen for when the user clicks 'Search Flights'
    searchForm.addEventListener('submit', function(event) {
        
        // Stop the page from reloading
        event.preventDefault();
        
        // Gather the information the user typed in
        const fromCity = document.getElementById('from').value;
        const toCity = document.getElementById('to').value;
        const departDate = document.getElementById('depart').value;
        const passengers = document.getElementById('passengers').value;
        
        // Show a confirmation pop-up mimicking a search process
        alert(`Searching flights from ${fromCity} to ${toCity}...\nDate: ${departDate}\nPassengers: ${passengers}\n\nPlease wait while we find the best routes for you!`);
        
    });

});
