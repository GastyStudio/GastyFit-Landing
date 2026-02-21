/* ============================================================
   ZONAFIT DEV — script.js
   Navbar scroll, hamburger, scroll reveal, form, animaciones
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load

    // ===== HAMBURGER MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        // Animate hamburger lines
        hamburger.classList.toggle('is-open', isOpen);
    });

    // Close menu on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('is-open');
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('is-open');
        }
    });

    // ===== HAMBURGER ANIMATION (lines → X) =====
    const hamStyle = document.createElement('style');
    hamStyle.textContent = `
        .hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .hamburger span { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); transform-origin: center; }
    `;
    document.head.appendChild(hamStyle);

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll(
        '.service-card, .caso-card, .ventaja-item, .proceso-step, .contacto-info, .contacto-form-wrap, .sobre-mi-grid'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger delay for siblings
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    const toast       = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // We let FormSubmit handle it. But if you want a fake success for local testing:
            // e.preventDefault();
            // showToast();

            // For FormSubmit with _next redirect, just let it submit.
            // Optionally show a loading state:
            const submitBtn = contactForm.querySelector('[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.style.opacity = '0.8';
                submitBtn.disabled = true;
            }
        });
    }

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }

    // Check if we landed with ?gracias=1 (after FormSubmit redirect)
    if (window.location.search.includes('gracias=1')) {
        showToast();
        // Clean URL
        window.history.replaceState({}, '', window.location.pathname);
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navH = navbar ? navbar.offsetHeight : 80;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - navH - 16;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');

    const activateNavLink = () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const sTop = section.offsetTop;
            const sH   = section.offsetHeight;
            const id    = section.getAttribute('id');
            const link  = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= sTop && scrollY < sTop + sH) {
                    link.style.color = 'var(--color-orange)';
                } else {
                    link.style.color = '';
                }
            }
        });
    };

    window.addEventListener('scroll', activateNavLink, { passive: true });

    // ===== COUNTER ANIMATION (footer stats) =====
    const counters = document.querySelectorAll('.footer-stat-number');

    const animateCounter = (el) => {
        const target = el.textContent;
        // Only animate numeric values
        const num = parseFloat(target);
        if (isNaN(num)) return;
        const suffix = target.replace(/[\d.]/g, '');
        const duration = 1200;
        const step = 16;
        const increment = num / (duration / step);
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                current = num;
                clearInterval(timer);
            }
            el.textContent = (Number.isInteger(num) ? Math.floor(current) : current.toFixed(1)) + suffix;
        }, step);
    };

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(c => counterObserver.observe(c));

    // ===== WHATSAPP BUTTON TOOLTIP SHOW/HIDE =====
    const waBtn = document.getElementById('whatsapp-float');
    let waTooltipTimer;

    if (waBtn) {
        // Show tooltip after 3 seconds of page load
        waTooltipTimer = setTimeout(() => {
            waBtn.querySelector('.whatsapp-tooltip').style.opacity = '1';
            waBtn.querySelector('.whatsapp-tooltip').style.transform = 'translateX(0)';
            setTimeout(() => {
                waBtn.querySelector('.whatsapp-tooltip').style.opacity = '';
                waBtn.querySelector('.whatsapp-tooltip').style.transform = '';
            }, 3000);
        }, 3500);
    }
});