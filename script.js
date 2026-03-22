/* Typing Animation */
const text = "Aspiring Entrepreneur";
const heroTitle = document.getElementById('heroTitle');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

/* Navbar Scroll Effect */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(12, 12, 12, 0.98)';
  } else {
    navbar.style.background = 'rgba(12, 12, 12, 0.95)';
  }
});

/* Scroll Animations */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
