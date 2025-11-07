// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the header element
    const header = document.getElementById("main-header");
    
    // Get the height of the viewport (the splash screen)
    const heroHeight = window.innerHeight;

    if (header) {
        
        window.addEventListener("scroll", function() {
            
            // Check if user has scrolled 90% of the way past the hero
            // === THE FIX IS HERE (>=) ===
            if (window.scrollY >= (heroHeight * 0.9)) {
                // If scrolled past, add the 'scrolled' class
                header.classList.add("scrolled");
            } else {
                // If back at the top, remove the 'scrolled' class
                header.classList.remove("scrolled");
            }
        });
    }

});
