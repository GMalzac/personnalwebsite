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

// export { initUpdateNavbarOnScroll };

// function initUpdateNavbarLinkOnScroll() {
//   const navbarLinks = document.querySelectorAll('p.navbar-wagon-link');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY >= window.innerHeight) {
//       navbarLinks.forEach((item) => {
//         item.classList.add('navbar-wagon-white-link');
//       });
//     } else {
//       navbarLinks.forEach((item) => {
//         item.classList.remove('navbar-wagon-white-link');
//       });
//     }
//   });
// }

// export { initUpdateNavbarLinkOnScroll };
