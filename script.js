// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

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
    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('active');
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  } else {
    header.style.background = 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  }
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all feature cards and news cards
document.querySelectorAll('.feature-card, .news-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
