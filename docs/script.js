// ===== Typing Effect =====
const typedText = document.getElementById('typed-text');
const heroCursor = document.getElementById('hero-cursor');
const text = 'Dustin Hannon';
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typedText.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  }
}

// Start typing after a short delay
setTimeout(type, 600);

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach((el) => revealObserver.observe(el));

// ===== Nav Scroll Effect =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== Active Section Highlighting =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '-60px 0px -40% 0px'
});

sections.forEach((section) => sectionObserver.observe(section));

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinksEl.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});
