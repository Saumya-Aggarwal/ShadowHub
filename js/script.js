let lastScrollY = window.scrollY;
let showNavbar = true;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-container');
  if (window.scrollY < lastScrollY || showNavbar) {
    navbar.classList.add('show');
    showNavbar = false;
  } else {
    navbar.classList.remove('show');
  }
  lastScrollY = window.scrollY;
});

// Ensure the navbar is shown on page load
window.addEventListener('load', () => {
  document.querySelector('.navbar-container').classList.add('show');
});
