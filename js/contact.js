// script.js

// Toggle the Hamburger Menu
const humburgerMenu = document.getElementById('humburger-menu');
const navLinks = document.querySelector('.nav-links');

humburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    humburgerMenu.classList.toggle('open');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Name Validation
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone Validation
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10-15 digits).');
        return;
    }

    alert('Form submitted successfully!');
    form.reset(); // Clear the form after successful submission
});

// Smooth Scrolling for Navigation (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
