/* ========================================
   CUSTOM CURSOR
   ======================================== */

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Check if device supports hover (not touch device)
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

// Track cursor position
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

if (!isTouchDevice && cursor && cursorFollower) {
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update main cursor immediately
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follow for cursor follower
    function animateFollower() {
        // Smooth interpolation
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .cta-button');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.classList.remove('hover');
        });
    });
} else {
    // Hide cursor elements on touch devices
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    document.body.style.cursor = 'auto';
}

/* ========================================
   NAVIGATION BAR
   ======================================== */

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Add scrolled class to navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

/* ========================================
   FLOATING PARTICLES
   ======================================== */

const particlesContainer = document.getElementById('particles');
const particleCount = 50;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation duration and delay
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 10;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    // Random size
    const size = 2 + Math.random() * 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particlesContainer.appendChild(particle);
}

/* ========================================
   PARALLAX EFFECT
   ======================================== */

const heroContent = document.querySelector('.hero-content');
const gradientOrbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle parallax for hero content
    const moveX = (mouseX - 0.5) * 20;
    const moveY = (mouseY - 0.5) * 20;
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // More pronounced parallax for gradient orbs
    gradientOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 100 * speed;
        const y = (mouseY - 0.5) * 100 * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

/* ========================================
   ENTER BUTTON - SMOOTH SCROLL
   ======================================== */

const enterButton = document.getElementById('enterButton');

enterButton.addEventListener('click', () => {
    // Create ripple effect
    createRipple(enterButton);
    
    // Smooth scroll to next section after a short delay
    setTimeout(() => {
        const nextSection = document.getElementById('gallery');
        if (nextSection) {
            nextSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 300);
});

// Ripple effect function
function createRipple(button) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = diameter + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(168, 85, 247, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */

// Observe elements for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all glass cards and section content
const animatedElements = document.querySelectorAll('.glass-card, .section-content');
animatedElements.forEach(el => observer.observe(el));

/* ========================================
   SMOOTH SCROLL FOR ALL LINKS
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   GLASSMORPHISM CARD TILT EFFECT
   ======================================== */

const glassCards = document.querySelectorAll('.glass-card');

glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */

// Throttle function for scroll events
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Apply throttling to scroll handler
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

/* ========================================
   ACCESSIBILITY ENHANCEMENTS
   ======================================== */

// Allow keyboard navigation to show focus outlines
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Announce page load to screen readers
window.addEventListener('load', () => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = 'Página de boas-vindas carregada. Navegue pelas seções usando o menu.';
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        announcement.remove();
    }, 1000);
});

// Screen reader only class
const srOnlyStyle = document.createElement('style');
srOnlyStyle.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(srOnlyStyle);

/* ========================================
   PRELOADER (OPTIONAL)
   ======================================== */

// Hide scroll indicator after user starts scrolling
let hasScrolled = false;
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 100) {
        hasScrolled = true;
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transition = 'opacity 0.5s ease';
    }
});

/* ========================================
   CONSOLE MESSAGE
   ======================================== */

console.log('%c✨ Bem-vindo ao Seu Lugar Especial ✨', 
    'font-size: 20px; font-weight: bold; color: #a855f7; text-shadow: 0 0 10px #a855f7;');
console.log('%cEste site foi criado com carinho especialmente para você.', 
    'font-size: 14px; color: #a0a0b0;');

/* ========================================
   RESPONSIVE UTILITIES
   ======================================== */

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset parallax on resize
        heroContent.style.transform = 'translate(0, 0)';
        gradientOrbs.forEach(orb => {
            orb.style.transform = 'translate(0, 0)';
        });
    }, 250);
});

// Prevent scroll during page load animations
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.overflow = 'visible';
    }, 1500);
});
