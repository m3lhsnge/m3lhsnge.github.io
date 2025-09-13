// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navbar.classList.remove('active');
            }
        });
    }
});

// Custom cursor effects removed
