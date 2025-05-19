// Mobile menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');

// Toggle menu
burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
    
    // Prevent body scroll when menu is open
    body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav-active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    });
});

// Close mobile menu when resizing window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow = '';
    }
});

// Form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
}); 