/**
 * PREMIUM INTERACTIVE PORTFOLIO ENGINE WORKSPACE
 * Core Framework: Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Platform Interfaces
    initPreloader();
    initCustomCursor();
    initParticleEngine();
    initTypingModule();
    initNavbarSystem();
    initScrollEngine();
    initInteractions3D();
    initRippleEffects();
    initStatsCounters();
    initThemeManager();
});

/* ==========================================================================
   SYSTEM CORE LOADING CONFIGURATION Matrix
   ========================================================================== */
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.loader-progress');
    
    if (!preloader) return;
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Run Initial Entry Animations Trigger
                    triggerScrollTransforms();
                }, 800);
            }, 200);
        } else {
            width += Math.floor(Math.random() * 15) + 5;
            if (width > 100) width = 100;
            progressBar.style.width = `${width}%`;
        }
    }, 40);
}

/* ==========================================================================
   CUSTOM DECO CURSOR TRAILING MATRIX EFFECT
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.custom-cursor-dot');
    
    if (!cursor || !dot) return;
    
    // Disable customized interaction layouts cleanly on legacy handheld engines
    if (window.matchMedia('(max-width: 768px)').matches) {
        cursor.style.display = 'none';
        dot.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll('a, button, .3d-hover, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}

/* ==========================================================================
   PERFORMANCE METRIC VECTOR PARTICLES BACKGROUND CANVAS ENGINE
   ========================================================================== */
function initParticleEngine() {
    const canvas = id('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = '#06B6D4';
            ctx.fill();
            ctx.restore();
        }
    }

    const maxParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   TYPING ENGINE ANIMATION PARSER STRUCTURE
   ========================================================================== */
function initTypingModule() {
    const target = id('typingElement');
    if (!target) return;
    
    const strings = [
        "Software Developer",
        "Java Developer",
        "Python Developer",
        "Machine Learning Enthusiast",
        "MCA Student"
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
        const currentString = strings[stringIndex];
        
        if (isDeleting) {
            target.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; 
        } else {
            target.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 120;
        }

        if (!isDeleting && charIndex === currentString.length) {
            typeSpeed = 1800; // Hold full text display
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typeSpeed = 600; // Delay before tracing next sequence string array map
        }

        setTimeout(typeLoop, typeSpeed);
    }
    
    setTimeout(typeLoop, 1000);
}

/* ==========================================================================
   GLASS NAVIGATION INTERACTION MATRIX & RESPONSIVE LAYOUT MOBILE
   ========================================================================== */
function initNavbarSystem() {
    const navbar = document.querySelector('.navbar');
    const hamburger = id('hamburgerMenu');
    const navMenu = id('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky Scroll Monitor
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Responsive Trigger Event Controls
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    window.scrollTo({
                        top: targetSection.offsetTop - navHeight + 10,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/* ==========================================================================
   SCROLL ENGINE (REVEAL TRANSFORM SCROLL & ACTIVE LINK NAVIGATION INTERFACES)
   ========================================================================== */
function initScrollEngine() {
    window.addEventListener('scroll', () => {
        triggerScrollTransforms();
        updateScrollIndicatorProgress();
        syncActiveNavLinks();
    });
}

function triggerScrollTransforms() {
    const structuralNodes = document.querySelectorAll(
        '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-zoom-in'
    );
    
    structuralNodes.forEach(node => {
        const nodeTop = node.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 80;
        
        if (nodeTop < triggerPoint) {
            node.classList.add('reveal-active');
            
            // Core Fallback Check to trigger inner skills progress meters tracking
            if (node.classList.contains('skills-category-box')) {
                animateCircularProgressMeters(node);
            }
        }
    });
}

function updateScrollIndicatorProgress() {
    const scrollBar = id('scrollBar');
    const backToTop = id('backToTop');
    if (!scrollBar) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    scrollBar.style.width = `${scrolled}%`;
    
    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
}

if (id('backToTop')) {
    id('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function syncActiveNavLinks() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let currentSectionId = '';
    
    sections.forEach(sec => {
        const secTop = sec.offsetTop - navbarHeight - 20;
        const secHeight = sec.offsetHeight;
        if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
            currentSectionId = `#${sec.getAttribute('id')}`;
        }
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentSectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function animateCircularProgressMeters(categoryCard) {
    const skills = categoryCard.querySelectorAll('.skill-prog-item');
    skills.forEach(item => {
        const circle = item.querySelector('.prog-circle');
        const textVal = item.querySelector('.percentage-val');
        if (!circle || circle.style.strokeDashoffset === '') return;
        
        const targetValue = parseInt(item.getAttribute('data-skill-value'), 10);
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        // Linear Interpolate Offsetting calculations
        const offset = circumference - (targetValue / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        
        // Counter Interpolator Engine
        let currentCount = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / targetValue));
        
        const timer = setInterval(() => {
            currentCount++;
            if (textVal) textVal.textContent = `${currentCount}%`;
            if (currentCount >= targetValue) clearInterval(timer);
        }, stepTime);
    });
}

/* ==========================================================================
   PROJECT CARDS 3D MATRIX HOVER INTERACTIONS
   ========================================================================== */
function initInteractions3D() {
    const dynamicCards = document.querySelectorAll('.3d-hover');
    
    dynamicCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Map Mouse positions directly into custom CSS coordinates variables layer
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
            
            // Calculate rotational coordinates offsets safely
            const rotateX = -((y - rect.height / 2) / rect.height) * 14;
            const rotateY = ((x - rect.width / 2) / rect.width) * 14;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
    
    // Parallax Vector Engine Track Controller on Hero Profile
    const parallaxFrame = document.querySelector('.parallax-container');
    if (parallaxFrame) {
        parallaxFrame.addEventListener('mousemove', (e) => {
            const layers = document.querySelectorAll('.profile-card-3d, .hero-content');
            const x = (window.innerWidth - e.clientX * 2) / 100;
            const y = (window.innerHeight - e.clientY * 2) / 100;
            
            layers.forEach(layer => {
                layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
        });
    }
}

/* ==========================================================================
   RIPPLE EFFECT STYLES PROCESSING MODULE
   ========================================================================== */
function initRippleEffects() {
    const ripples = document.querySelectorAll('.ripple-effect');
    ripples.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rippleElement = document.createElement('span');
            rippleElement.classList.add('ripple');
            rippleElement.style.left = `${x}px`;
            rippleElement.style.top = `${y}px`;
            
            this.appendChild(rippleElement);
            
            setTimeout(() => {
                rippleElement.remove();
            }, 600);
        });
    });
}

/* ==========================================================================
   STATISTICAL ENGINE COUNTER CALCULATOR MODULE
   ========================================================================== */
function initStatsCounters() {
    const counterElements = document.querySelectorAll('.stat-counter');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-target'), 10);
                let startValue = 0;
                const duration = 2000;
                const increment = endValue / (duration / 16);
                
                function updateCounter() {
                    startValue += increment;
                    if (startValue >= endValue) {
                        target.textContent = (endValue === 100) ? "100%" : `${String(endValue).padStart(2, '0')}+`;
                    } else {
                        target.textContent = Math.floor(startValue) + (endValue === 100 ? "%" : "+");
                        requestAnimationFrame(updateCounter);
                    }
                }
                updateCounter();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));
}

/* ==========================================================================
   THEME STORAGE LIFECYCLE MANAGEMENT LAYER
   ========================================================================== */
function initThemeManager() {
    const toggleBtn = id('themeToggle');
    if (!toggleBtn) return;
    
    const icon = toggleBtn.querySelector('i');
    
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
            icon.className = 'fas fa-moon';
        } else {
            document.body.setAttribute('data-theme', 'light');
            icon.className = 'fas fa-sun';
        }
    });
}

/* Helper Selector Blueprint Node */
function id(elementIdentifier) {
    return document.getElementById(elementIdentifier);
}