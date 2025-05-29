document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                menuToggle.innerHTML = '&times;'; // Change to X icon
            } else {
                menuToggle.innerHTML = '&#9776;'; // Change back to hamburger
            }
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '&#9776;';
            }
        });
    });
    
    // Smooth scroll for anchor links (CSS already handles this, but good for fallback or more control)
    // This also helps close menu if a main page link is clicked.
    // Let's rely on CSS scroll-behavior: smooth for now.

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission

            // Basic form data retrieval (example)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Display a success message (or handle errors)
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            formStatus.style.color = 'var(--safety-yellow)';
            
            contactForm.reset(); // Clear the form

            setTimeout(() => {
                formStatus.textContent = ''; // Clear status message after a few seconds
            }, 5000);
        });
    }

    // Update copyright year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

