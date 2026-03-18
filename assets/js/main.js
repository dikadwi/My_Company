// =============================================
// Mobile Navigation Toggle
// =============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Add animation effect
    navToggle.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// =============================================
// Navbar scroll effect with enhanced styling
// =============================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 8px 20px rgba(15, 52, 96, 0.12)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 2px 8px rgba(15, 52, 96, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// =============================================
// Enhanced Intersection Observer for All Elements
// =============================================

const observerOptions = {
    threshold: [0, 0.15, 0.5],
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
            entry.target.setAttribute('data-animated', 'true');
            entry.target.classList.add('animate-in');
            
            // Add staggered delay for child elements
            if (entry.target.children.length > 0) {
                Array.from(entry.target.children).forEach((child, idx) => {
                    child.style.animationDelay = `${idx * 0.1}s`;
                    child.classList.add('animate-in');
                });
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section, index) => {
    section.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s`;
    animationObserver.observe(section);
});

// Observe all cards and items with staggered animation
document.querySelectorAll('.service-card, .portfolio-item, .highlight, .tech-item, .process-step').forEach((el) => {
    el.classList.add('scroll-animate');
    animationObserver.observe(el);
});

// Observe section titles and subtitles
document.querySelectorAll('.section-title, .section-subtitle').forEach((el) => {
    el.classList.add('title-animate');
    animationObserver.observe(el);
});

// Create CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .scroll-animate {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), 
                    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .title-animate {
        opacity: 0;
        transform: translateY(30px) scaleY(0.95);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, 
                    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
    }
    
    .title-animate.animate-in {
        opacity: 1;
        transform: translateY(0) scaleY(1);
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyles);

// =============================================
// Parallax Effect for Hero Section
// =============================================

const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroElements = heroSection.querySelectorAll('h1, p, .hero-buttons');
        
        heroElements.forEach((el, index) => {
            const parallaxOffset = scrollPosition * (0.3 + index * 0.1);
            if (scrollPosition < window.innerHeight) {
                el.style.transform = `translateY(${parallaxOffset}px)`;
                el.style.opacity = Math.max(1 - scrollPosition / window.innerHeight, 0);
            }
        });
    });
}

// =============================================
// Enhanced Scroll Detection & Element Tracking
// =============================================

const scrollTracker = {
    lastScrollPosition: 0,
    scrollDirection: 'down',
    
    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            this.scrollDirection = currentScroll > this.lastScrollPosition ? 'down' : 'up';
            this.lastScrollPosition = currentScroll;
        }, { passive: true });
    }
};

scrollTracker.init();

// =============================================
// Advanced Section Animation Trigger
// =============================================

document.querySelectorAll('section').forEach((section, sectionIndex) => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionTitle = section.querySelector('.section-title');
                const sectionSubtitle = section.querySelector('.section-subtitle');
                const sectionContent = section.querySelectorAll('.service-card, .portfolio-item, .highlight, .tech-item, .process-step, .about-text');
                
                // Animate title
                if (sectionTitle && !sectionTitle.hasAttribute('data-animated')) {
                    sectionTitle.setAttribute('data-animated', 'true');
                    sectionTitle.style.opacity = '0';
                    sectionTitle.style.transform = 'translateY(-30px)';
                    setTimeout(() => {
                        sectionTitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                        sectionTitle.style.opacity = '1';
                        sectionTitle.style.transform = 'translateY(0)';
                    }, 50);
                }
                
                // Animate subtitle
                if (sectionSubtitle && !sectionSubtitle.hasAttribute('data-animated')) {
                    sectionSubtitle.setAttribute('data-animated', 'true');
                    sectionSubtitle.style.opacity = '0';
                    sectionSubtitle.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        sectionSubtitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s';
                        sectionSubtitle.style.opacity = '1';
                        sectionSubtitle.style.transform = 'translateY(0)';
                    }, 50);
                }
                
                // Animate content items with stagger
                sectionContent.forEach((element, index) => {
                    if (!element.hasAttribute('data-animated')) {
                        element.setAttribute('data-animated', 'true');
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(30px)';
                        
                        const delay = 200 + (index * 80);
                        setTimeout(() => {
                            element.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, delay);
                    }
                });
            }
        });
    }, {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '0px 0px -100px 0px'
    });
    
    sectionObserver.observe(section);
});

// =============================================
// Smooth Scroll Enhancement
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target && href !== '#') {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============================================
// Contact Form Handling with Enhanced Feedback
// =============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Add visual feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        
        // Send email via mailto link
        const mailtoLink = `mailto:info@nayarkamaladigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        
        // Simulate form submission
        setTimeout(() => {
            window.location.href = mailtoLink;
            contactForm.reset();
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            showNotification('Email client opened. Thank you for contacting us!', 'success');
        }, 500);
    });
}
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// =============================================
// WhatsApp Button with Enhanced Functionality
// =============================================

const whatsappPhone = '6281234567890'; // Update with actual number
const whatsappBtn = document.querySelector('.btn-whatsapp');

if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${whatsappPhone}?text=Hi, I'm interested in your services!`;
    
    // Add hover animation
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// =============================================
// Form Field Enhanced Interactions
// =============================================

const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.style.borderColor = '#1abc9c';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
        if (!this.value) {
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.value) {
            this.style.borderColor = '#1abc9c';
        }
    });
});

// =============================================
// Notification System
// =============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.4s ease-out;
        font-weight: 500;
        max-width: 350px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// =============================================
// Button Ripple Effect
// =============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripdle 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripdle {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideOutRight {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(style);

// =============================================
// Counter Animation for Stats with Intersection
// =============================================

function animateCounter(element, target, duration = 2500) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
            return;
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// Observe highlight numbers with separate observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-counter-animated')) {
            entry.target.setAttribute('data-counter-animated', 'true');
            const text = entry.target.textContent.replace(/\D/g, '');
            const target = parseInt(text);
            if (!isNaN(target)) {
                animateCounter(entry.target, target, 2500);
            }
        }
    });
}, { 
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.highlight h3').forEach(el => statsObserver.observe(el));

// =============================================
// Smooth Page Load with Staggered Elements
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content on page load
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 0.8s ease-out 0.1s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease-out 0.2s';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 100);
    }
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.6s ease-out';
});

// =============================================
// Add CSS for enhanced interactivity
// =============================================

const interactiveStyle = document.createElement('style');
interactiveStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .form-group input,
    .form-group textarea {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(interactiveStyle);
