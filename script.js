// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Form Validation
    const form = document.querySelector('#contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            const email = form.querySelector('input[name="email"]');
            const phone = form.querySelector('input[name="phone"]');
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();

            let valid = true;

            if (!emailValue || !validateEmail(emailValue)) {
                alert('Please enter a valid email address.');
                valid = false;
            }

            if (!phoneValue || !validatePhone(phoneValue)) {
                alert('Please enter a valid phone number.');
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            }
        });

        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function validatePhone(phone) {
            const phonePattern = /^\+?[1-9]\d{1,14}$/;
            return phonePattern.test(phone);
        }
    }
});
