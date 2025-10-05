

const searchBar = document.getElementById('searchBar');
const brandCards = document.querySelectorAll('.brand-card');
searchBar.addEventListener('keyup', function(e) {
  const searchText = e.target.value.toLowerCase();
  brandCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(searchText) ? 'block' : 'none';
  });
});
// Smooth scroll custom untuk tombol Jelajahi
document.querySelector('.btn-explore').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#brands').scrollIntoView({
    behavior: 'smooth'
  });
});
// Smooth scroll untuk tombol "Jelajahi"
document.querySelector('.btn-explore').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#brands').scrollIntoView({
    behavior: 'smooth'
  });
});

// Smooth scroll untuk tombol "Mobil Unggulan"
document.querySelector('.btn-featured').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#featured').scrollIntoView({
    behavior: 'smooth'
  });
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Background Animation
VANTA.NET({
  el: "#bg-animate",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffd700,
  backgroundColor: 0x000000,
  points: 12.00,
  maxDistance: 25.00,
  spacing: 18.00
});
// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, i) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      setTimeout(() => {
        el.classList.add('active');
      }, i * 200); // delay biar muncul satu per satu
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
