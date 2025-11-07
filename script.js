// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the header element
    const header = document.getElementById("main-header");

    // Check if the header exists
    if (header) {
        
        // Listen for the scroll event on the window
        window.addEventListener("scroll", function() {
            
            // Check if the user has scrolled more than 50 pixels down
            if (window.scrollY > 50) {
                // If scrolled, add the 'scrolled' class
                header.classList.add("scrolled");
            } else {
                // If at the top, remove the 'scrolled' class
                header.classList.remove("scrolled");
            }
        });
    }

});
