// ============================
// RK Tours & Travels - Main JS
// ============================

// ---- Mobile Menu Toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });
}

// ---- Scroll to Top Button ----
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Fade In on Scroll ----
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeElements.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// Run on load and scroll
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// ---- Checklist LocalStorage (Documents Page) ----
var checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
  var key = 'rk-check-' + checkbox.getAttribute('data-key');

  // Load saved state
  if (localStorage.getItem(key) === 'true') {
    checkbox.checked = true;
  }

  // Save on change
  checkbox.addEventListener('change', function () {
    localStorage.setItem(key, checkbox.checked);
  });
});

// ---- Pre-fill Destination from URL (Contact Page) ----
var urlParams = new URLSearchParams(window.location.search);
var destinationParam = urlParams.get('destination');
var destinationSelect = document.getElementById('destination');

if (destinationParam && destinationSelect) {
  // Try to match the option
  for (var i = 0; i < destinationSelect.options.length; i++) {
    if (destinationSelect.options[i].value === destinationParam) {
      destinationSelect.value = destinationParam;
      break;
    }
  }
}

// ---- Floating WhatsApp Button ----
document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.whatsapp-float')) {
    var waFloat = document.createElement('a');
    waFloat.className = 'whatsapp-float';
    waFloat.href = 'https://wa.me/917285038337?text=Hello%20RK%20Tours%20%26%20Travels,%20I%20would%20like%20to%20book%20a%20trip!';
    waFloat.target = '_blank';
    waFloat.rel = 'noopener noreferrer';
    waFloat.setAttribute('aria-label', 'Book on WhatsApp');
    waFloat.innerHTML = '<i class="fab fa-whatsapp"></i><span>Book Now</span>';
    document.body.appendChild(waFloat);
  }
});

