function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-wagon-white');
    } else {
      navbar.classList.remove('navbar-wagon-white');
    }
  });
}

export { initUpdateNavbarOnScroll };

function initUpdateNavbarLinkOnScroll() {
  const navbarLink = document.querySelector('.navbar-wagon-link');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbarLink.classList.add('navbar-wagon-white-link');
    } else {
      navbarLink.classList.remove('navbar-wagon-white-link');
    }
  });
}

export { initUpdateNavbarLinkOnScroll };
