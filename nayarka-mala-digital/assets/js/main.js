// =============================================
// Mobile Navigation Toggle
// =============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// =============================================
// Contact Form Handling
// =============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Send email via mailto link
        const mailtoLink = `mailto:info@nayarkamaladigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
    });
}

// =============================================
// Smooth Scroll Enhancement
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // Native smooth scroll will handle the rest
        }
    });
});

// =============================================
// Add scroll animation to elements
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item, .highlight, .tech-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =============================================
// Navbar scroll effect
// =============================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// =============================================
// WhatsApp Button - Update phone number
// =============================================

// Replace with actual WhatsApp number in the format: 6281234567890 (country code + number without +)
const whatsappPhone = '6281234567890'; // Update this with actual WhatsApp number
const whatsappBtn = document.querySelector('.btn-whatsapp');

if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${whatsappPhone}?text=Hi, I'm interested in your services!`;
}

// =============================================
// Form field animations
// =============================================

const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
